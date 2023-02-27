import { ICreatePersonDependentDTO } from "@modules/PersonDependent/dtos/ICreatePersonDependentDTO";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";

import {logger} from "../../../../../logger"
import { v4 as uuidV4 } from "uuid";

import { PrismaClient, PersonDependent } from "@prisma/client";

const prisma = new PrismaClient()
class PersonDependentRepository implements IPersonDependentRepository {

    async create(data: ICreatePersonDependentDTO): Promise<PersonDependent> {
        const {id, namePerson, emailPerson, birthday, cpf, dependentOnId} = data
        
        try {
            const personDependent = await prisma.personDependent.create({
                data: {
                    id,
                    namePerson, 
                    emailPerson, 
                    birthday, 
                    cpf, 
                    fk_id_person_on_dependent:dependentOnId                    
                }
            })

            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByEmail(email: string): Promise<PersonDependent> {
        try {
            const personDependent = await prisma.personDependent.findFirst({
                where: {                    
                    emailPerson: email
                }
            })

            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByCPF(cpf: string): Promise<PersonDependent> {
        try {
            const personDependent = await prisma.personDependent.findFirst({
                where: {
                    cpf
                }
            })
            
            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }
    async findById(id: string): Promise<PersonDependent> {
        try {
            const personDependent = await prisma.personDependent.findFirst({
                where: {id}
            })
            
            return personDependent
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }
    async find(): Promise<PersonDependent[]> {
        try {
            const personDependentList = await prisma.personDependent.findMany()
            return personDependentList
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

}

export {PersonDependentRepository}