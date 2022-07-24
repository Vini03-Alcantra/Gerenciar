import { inject, injectable } from "tsyringe";
import { IRendasVariableRepository } from "../../repositories/IRendasVariables";

@injectable()
class TotalRendaVariableUseCase {
    constructor(
        @inject("RendaVariableRepository")
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute(auth_id: string): Promise<Number>{
        const rendaVariavel = await this.rendaVariableRepository.total(auth_id)

        return rendaVariavel
    }
}

export {TotalRendaVariableUseCase}