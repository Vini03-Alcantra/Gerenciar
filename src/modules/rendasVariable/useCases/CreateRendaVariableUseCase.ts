import { inject, injectable } from "tsyringe";
import { ICreateRendaVariableDTO } from "../dtos/ICreateRendaVariableDTO";
import { RendaVariavel } from "../infra/typeorm/entities/RendaVariavel";
import { IRendasVariableRepository } from "../repositories/IRendasVariablesConstant";


@injectable()
class CreateRendaVariableUseCase {
    constructor(
        @inject("RendaVariableUseCase")
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute({
        origemRendaVariavle,
        valorRendaVariavel,
        dataRendaVariavel,
        idPerson
    }: ICreateRendaVariableDTO): Promise<RendaVariavel>{
        const rendaVariavel = await this.rendaVariableRepository.create({
            origemRendaVariavle,
            valorRendaVariavel,
            dataRendaVariavel,
            idPerson
        })

        return rendaVariavel
    }
}

export {CreateRendaVariableUseCase}