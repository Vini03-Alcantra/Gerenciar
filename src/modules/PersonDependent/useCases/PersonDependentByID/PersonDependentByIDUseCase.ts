import { PersonDependent } from "@modules/PersonDependent/infra/typeorm/entities/PersonDependent";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import { inject, injectable } from "tsyringe";

class PersonDependentIDUseCase {
    constructor(
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(id: string): Promise<PersonDependent>{
        const personsDependent = await this.personsDependentsRepository.findById(id)

        return personsDependent
    }
}

export {PersonDependentIDUseCase}