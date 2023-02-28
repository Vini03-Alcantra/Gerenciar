import { IRendasVariableRepository } from "../../repositories/IRendasVariables";

class TotalRendaVariableUseCase {
    constructor(
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute(auth_id: string): Promise<Number>{
        const rendaVariavel = await this.rendaVariableRepository.total(auth_id)

        return rendaVariavel
    }
}

export {TotalRendaVariableUseCase}