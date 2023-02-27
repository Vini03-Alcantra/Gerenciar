import { AppError } from "../../../../../errors/AppError";
import { ICreatePersonDTO } from "modules/person/dtos/ICreatePersonDTO";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";

import { PrismaClient, Person } from "@prisma/client";

const prisma = new PrismaClient()

class PersonsRepository implements IPersonRepository {
    async create({
        namePerson, 
        birthday,
        cpf,
        agePerson,
        emailPerson,
        id
    }: ICreatePersonDTO): Promise<Person> {        
        try {
            await prisma.person.create({
                data: {
                    namePerson, 
                    birthday,
                    cpf,
                    agePerson,
                    emailPerson,
                    id
                }      
            })

            const person = await prisma.person.findFirst({where: {
                id
            }})
    
            return person
        } catch (err) {
            console.error(err)            
        }
    }
    
    async find(): Promise<Person[]> {
        try {
            const persons = await prisma.person.findMany()

            return persons
        } catch (error) {
            throw new AppError("Operation isn't possible", 501)   
        }
    }

    async findByEmail(email: string): Promise<Person> {
        const emailPerson = await prisma.person.findFirst(
            {
                where: {
                    emailPerson: email
                }
            }
        )

        return emailPerson
    }

    async findById(id: string): Promise<Person> {
        const person = await prisma.person.findUnique(
            {
                where: {id}
            }
        )

        return person
    }

}

export {PersonsRepository}