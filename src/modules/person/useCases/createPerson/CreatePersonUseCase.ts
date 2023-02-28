import { ICreatePersonDTO } from "../../dtos/ICreatePersonDTO";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";
import { inject, injectable } from "tsyringe";
import { Person } from "@prisma/client";

@injectable()
class CreatePersonUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonRepository
    ){}

    async execute({
        namePerson,
        agePerson,
        emailPerson,
        birthday, 
        cpf
    }: ICreatePersonDTO): Promise<Person>{
        const persons = await this.personsRepository.create({
            namePerson, 
            agePerson, 
            emailPerson,
            birthday, 
            cpf
        })

        return persons
    }
}

export {CreatePersonUseCase}