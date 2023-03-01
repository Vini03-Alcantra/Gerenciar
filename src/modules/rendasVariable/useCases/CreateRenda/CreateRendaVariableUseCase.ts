import { ICreateRendaVariableDTO } from "../../dtos/ICreateRendaVariableDTO";
import {SteadyIncome} from "@prisma/client"
import { IRendasVariableRepository } from "../../repositories/IRendasVariables";
import { v4 as uuidV4 } from "uuid";
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
        const id = uuidV4();
        const rendaVariavel = await this.rendaVariableRepository.create(            
            auth_id,
            {
                id,
                incomeOrigin,
                valueIncome,
                dateIncome
        })

        return rendaVariavel
    }
}

export {CreateRendaVariableUseCase}