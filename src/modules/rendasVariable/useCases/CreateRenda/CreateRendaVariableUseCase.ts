import { inject, injectable } from "tsyringe";
import { ICreateRendaVariableDTO } from "../../dtos/ICreateRendaVariableDTO";
import {SteadyIncome} from "@prisma/client"
import { IRendasVariableRepository } from "../../repositories/IRendasVariables";


class CreateRendaVariableUseCase {
    constructor(
        private rendaVariableRepository: IRendasVariableRepository
    ){}

    async execute(
        auth_id: string,
    {
        incomeOrigin,
        valueIncome,
        dateIncome
    }: ICreateRendaVariableDTO): Promise<SteadyIncome>{
        const rendaVariavel = await this.rendaVariableRepository.create(
            auth_id,
            {
                incomeOrigin,
                valueIncome,
                dateIncome
        })

        return rendaVariavel
    }
}

export {CreateRendaVariableUseCase}