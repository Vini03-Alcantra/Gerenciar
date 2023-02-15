import { PersonDependent } from "@modules/PersonDependent/infra/typeorm/entitties/PersonDependent";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class PersonDependentEmailUseCase {
    constructor(
        @inject("PersonsDependentsRepository")
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(email: string): Promise<PersonDependent>{
        const personsDependent = await this.personsDependentsRepository.findByEmail(email)

        return personsDependent
    }
}

export {PersonDependentEmailUseCase}