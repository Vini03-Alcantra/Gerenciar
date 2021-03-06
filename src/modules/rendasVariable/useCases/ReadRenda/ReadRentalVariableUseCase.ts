import { inject, injectable } from "tsyringe";
import { ICreateRendaVariableDTO } from "../../dtos/ICreateRendaVariableDTO";
import { RendaVariavel } from "../../infra/typeorm/entities/RendaVariavel";
import { IRendasVariableRepository } from "../../repositories/IRendasVariables";


@injectable()
class ReadRendaVariableUseCase {
    constructor(
        @inject("RendaVariableRepository")
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute(): Promise<RendaVariavel[]>{
        const rendaVariavels = await this.rendaVariableRepository.read()

        return rendaVariavels
    }
}

export {ReadRendaVariableUseCase}