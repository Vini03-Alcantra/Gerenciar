import { AppError } from "../../../../../errors/AppError";
import { ICreatePersonDTO } from "modules/person/dtos/ICreatePersonDTO";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";
import { getRepository, Repository } from "typeorm";
import { Person } from "../entities/Person";

class PersonsRepository implements IPersonRepository {
    private repository: Repository<Person>
    
    constructor(){
        this.repository = getRepository(Person)
    }
    
    async create({
        nomePerson, 
        birthday,
        cpf,
        idadePerson,
        emailPerson,
        id
    }: ICreatePersonDTO): Promise<Person> {
        console.log(typeof idadePerson)
        try {
            const person = this.repository.create({
                nomePerson: nomePerson, 
                idadePerson: idadePerson,
                emailPerson: emailPerson,            
                birthday: birthday,
                cpf: cpf,
                id: id
            })
    
            await this.repository.save(person)
    
            return person
        } catch (err) {
            console.error(err)            
        }
    }
    
    async find(): Promise<Person[]> {
        try {
            const persons = await this.repository.find()

            return persons
        } catch (error) {
            throw new AppError("Operation isn't possible", 501)   
        }
    }

    async findByEmail(email: string): Promise<Person> {
        const emailPerson = await this.repository.findOne(
            {emailPerson: email}
        )

        return emailPerson
    }

    async findById(id: string): Promise<Person> {
        const person = await this.repository.findOne(
            {id}
        )

        return person
    }

}

export {PersonsRepository}