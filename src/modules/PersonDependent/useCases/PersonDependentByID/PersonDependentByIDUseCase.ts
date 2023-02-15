import { PersonDependent } from "@modules/PersonDependent/infra/typeorm/entitties/PersonDependent";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class PersonDependentIDUseCase {
    constructor(
        @inject("PersonsDependentsRepository")
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(id: string): Promise<PersonDependent>{
        const personsDependent = await this.personsDependentsRepository.findById(id)

        return personsDependent
    }
}

export {PersonDependentIDUseCase}