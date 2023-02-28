import { PersonDependent } from "@prisma/client";
import { ICreatePersonDependentDTO } from "../../dtos/ICreatePersonDependentDTO";
import { IPersonDependentRepository } from "../../repositories/IPersonDependentRepository";

class CreatePersonDependentUseCase {
    constructor(
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(data: ICreatePersonDependentDTO): Promise<PersonDependent>{
        const {namePerson, emailPerson, birthday, cpf, dependentOnId} = data;

        const personsDependents = await this.personsDependentsRepository.create({
            namePerson, 
            emailPerson, 
            birthday, 
            cpf, 
            dependentOnId
        })

        return personsDependents
    }
}

export {CreatePersonDependentUseCase}