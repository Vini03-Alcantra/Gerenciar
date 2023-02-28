import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import {PersonDependent} from "@prisma/client"
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