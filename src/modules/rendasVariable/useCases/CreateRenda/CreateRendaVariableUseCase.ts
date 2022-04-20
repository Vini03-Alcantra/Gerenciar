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

    async execute({
        origemRendaVariable,
        valorRendaVariavel,
        dataRendaVariavel,
        idPerson
    }: ICreateRendaVariableDTO): Promise<RendaVariavel>{
        const rendaVariavel = await this.rendaVariableRepository.create({
            origemRendaVariable,
            valorRendaVariavel,
            dataRendaVariavel,
            idPerson
        })

        return rendaVariavel
    }
}

export {CreateRendaVariableUseCase}