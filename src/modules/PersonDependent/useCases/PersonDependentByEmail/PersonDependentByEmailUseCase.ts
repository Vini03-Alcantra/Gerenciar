import { PersonDependent } from "@modules/PersonDependent/infra/typeorm/entities/PersonDependent";
import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";

class PersonDependentEmailUseCase {
    constructor(
        private personsDependentsRepository: IPersonDependentRepository
    ){}

    async execute(email: string): Promise<PersonDependent>{
        const personsDependent = await this.personsDependentsRepository.findByEmail(email)

        return personsDependent
    }
}

export {PersonDependentEmailUseCase}