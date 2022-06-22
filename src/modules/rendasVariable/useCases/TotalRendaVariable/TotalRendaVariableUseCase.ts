import { inject, injectable } from "tsyringe";
import { IRendasVariableRepository } from "../../repositories/IRendasVariables";

@injectable()
class TotalRendaVariableUseCase {
    constructor(
        @inject("RendaVariableRepository")
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute(): Promise<Number>{
        const rendaVariavel = await this.rendaVariableRepository.total()

        return rendaVariavel
    }
}

export {TotalRendaVariableUseCase}