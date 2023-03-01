import { ICreatePersonDTO } from "../../dtos/ICreatePersonDTO";
import { IPersonRepository } from "modules/person/repositories/IPersonRepository";
import { Person } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";
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
        const id = uuidV4();
        const persons = await this.personsRepository.create({
            id,
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