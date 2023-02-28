import { IPersonDependentRepository } from "@modules/PersonDependent/repositories/IPersonDependentRepository";
import {PersonDependent} from "@prisma/client"
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