import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";

class TotalRendaConstantUseCase {
    
    constructor(
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(auth_id: string): Promise<Number>{        
        const rendaConstant = await this.rendaConstantRepository.total(auth_id)

        return rendaConstant
    }
}

export {TotalRendaConstantUseCase}