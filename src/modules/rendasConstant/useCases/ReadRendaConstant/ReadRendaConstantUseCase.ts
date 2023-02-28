import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";
import { SteadyIncome } from "@prisma/client";

class ReadRendaConstantUseCase {    
    constructor(
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(auth_id: string): Promise<SteadyIncome[]>{        
        const rendaConstant = await this.rendaConstantRepository.read(auth_id)

        return rendaConstant
    }
}

export {ReadRendaConstantUseCase}