import { ICreatePersonDTO } from "../../dtos/ICreatePersonDTO";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";
import { Person } from "@prisma/client";

class CreatePersonUseCase {
    constructor(
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