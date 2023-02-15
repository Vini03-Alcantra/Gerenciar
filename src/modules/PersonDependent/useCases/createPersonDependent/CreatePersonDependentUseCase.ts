import { ICreatePersonDependentDTO } from "@modules/PersonDependent/dtos/ICreatePersonDependentDTO";
import { PersonDependent } from "@modules/PersonDependent/infra/typeorm/entitties/PersonDependent";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreatePersonDependentuseCase {
    constructor(
        @inject("PersonsDependentsRepository")
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

export {CreatePersonDependentuseCase}