import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import {PersonDependent} from "@prisma/client"
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