import { ICreateRendaConstantDTO } from "../../dtos/ICreateRendaConstantDTO";
import { v4 as uuidV4 } from "uuid";
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
        const id = uuidV4();
        const rendaConstant = await this.rendaConstantRepository.create({
            id,
            fk_id_person,
            incomeOrigin,
            valueIncome,
            dateIncome
        })

        return rendaConstant
    }
}

export {CreateRendaConstantUseCase}