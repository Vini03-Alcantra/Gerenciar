import { v4 as uuidV4 } from "uuid";
import { PersonDependent } from "@prisma/client";
import { ICreatePersonDependentDTO } from "../../dtos/ICreatePersonDependentDTO";
import { IPersonDependentRepository } from "../../repositories/IPersonDependentRepository";

class CreatePersonDependentUseCase {
    constructor(
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(data: ICreatePersonDependentDTO): Promise<PersonDependent>{
        const {namePerson, emailPerson, birthday, cpf, dependentOnId} = data;
        const id = uuidV4();
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