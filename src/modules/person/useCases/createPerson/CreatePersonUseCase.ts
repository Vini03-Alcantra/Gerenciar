import { ICreatePersonDTO } from "modules/person/dtos/ICreatePersonDTO";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreatePersonUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonRepository
    ){}

    async execute({nomePerson, idadePerson, emailPerson}: ICreatePersonDTO): Promise<void>{
        const persons = await this.personsRepository.create({
            nomePerson, 
            idadePerson, 
            emailPerson  
        })

        console.log(persons)
    }
}

export {CreatePersonUseCase}