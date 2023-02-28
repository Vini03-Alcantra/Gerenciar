import { ICreateRendaConstantDTO } from "../../dtos/ICreateRendaConstantDTO";

import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";
import { SteadyIncome } from "@prisma/client";

class CreateRendaConstantUseCase {
    
    constructor(
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(
        {
            fk_id_person,
            incomeOrigin, 
            valueIncome, 
            dateIncome        
    }: ICreateRendaConstantDTO): Promise<SteadyIncome>{        
        const rendaConstant = await this.rendaConstantRepository.create({
            fk_id_person,
            incomeOrigin,
            valueIncome,
            dateIncome
        })

        return rendaConstant
    }
}

export {CreateRendaConstantUseCase}