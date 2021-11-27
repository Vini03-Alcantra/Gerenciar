import { ICreatePersonDTO } from "modules/person/dtos/ICreatePersonDTO";
import { Person } from "modules/person/infra/typeorm/entities/Person";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreatePersonUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonRepository
    ){}

    async execute({
        nomePerson,
        idadePerson,
        emailPerson
    }: ICreatePersonDTO): Promise<Person>{
        const persons = await this.personsRepository.create({
            nomePerson, 
            idadePerson, 
            emailPerson  
        })

        return persons
    }
}

export {CreatePersonUseCase}