import { VariableIncome } from "@prisma/client";
import { IRendasVariableRepository } from "../../repositories/IRendasVariables";

class ReadRendaVariableUseCase {
    constructor(
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute(auth_id: string): Promise<VariableIncome[]>{
        const rendaVariavels = await this.rendaVariableRepository.read(auth_id)

        return rendaVariavels
    }
}

export {ReadRendaVariableUseCase}