import { PersonDependent } from "@modules/PersonDependent/infra/typeorm/entitties/PersonDependent";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class PersonDependentCPFUseCase {
    constructor(
        @inject("PersonsDependentsRepository")
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(cpf: string): Promise<PersonDependent>{
        const personsDependent = await this.personsDependentsRepository.findByCPF(cpf)

        return personsDependent
    }
}

export {PersonDependentCPFUseCase}