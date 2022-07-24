import { inject, injectable } from "tsyringe";
import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";

@injectable()
class TotalRendaConstantUseCase {
    
    constructor(
        @inject("RendaConstantRepository")
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(auth_id: string): Promise<Number>{        
        const rendaConstant = await this.rendaConstantRepository.total(auth_id)

        return rendaConstant
    }
}

export {TotalRendaConstantUseCase}