import { inject, injectable } from "tsyringe";
import { ICreateRendaVariableDTO } from "../../dtos/ICreateRendaVariableDTO";
import { RendaVariavel } from "../../infra/typeorm/entities/RendaVariavel";
import { IRendasVariableRepository } from "../../repositories/IRendasVariables";


@injectable()
class CreateRendaVariableUseCase {
    constructor(
        @inject("RendaVariableRepository")
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute(
        auth_id: string,
        {
        origemRendaVariable,
        valorRendaVariavel,
        dataRendaVariavel
    }: ICreateRendaVariableDTO): Promise<RendaVariavel>{
        const rendaVariavel = await this.rendaVariableRepository.create(
            auth_id,
            {
            origemRendaVariable,
            valorRendaVariavel,
            dataRendaVariavel
        })

        return rendaVariavel
    }
}

export {CreateRendaVariableUseCase}