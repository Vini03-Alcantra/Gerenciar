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
        idadePerson,
        emailPerson,
        id
    }: ICreatePersonDTO): Promise<void> {
        const person = this.repository.create({
            nomePerson: nomePerson, 
            idadePerson: idadePerson,
            emailPerson: emailPerson,            
            id: id
        })

        await this.repository.save(person)
    }

}

export {PersonsRepository}