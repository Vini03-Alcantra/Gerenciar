import { PersonDependent } from "@modules/PersonDependent/infra/typeorm/entities/PersonDependent";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import { inject, injectable } from "tsyringe";

class PersonDependentCPFUseCase {
    constructor(
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(cpf: string): Promise<PersonDependent>{
        const personsDependent = await this.personsDependentsRepository.findByCPF(cpf)

        return personsDependent
    }
}

export {PersonDependentCPFUseCase}