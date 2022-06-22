import { inject, injectable } from "tsyringe";
import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";

@injectable()
class TotalRendaConstantUseCase {
    
    constructor(
        @inject("RendaConstantRepository")
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(): Promise<Number>{        
        const rendaConstant = await this.rendaConstantRepository.total()

        return rendaConstant
    }
}

export {TotalRendaConstantUseCase}