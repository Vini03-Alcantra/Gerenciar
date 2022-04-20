import { inject, injectable } from "tsyringe";
import { RendaConstant } from "../../infra/typeorm/entities/RendaConstant";
import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";

@injectable()
class ReadRendaConstantUseCase {
    
    constructor(
        @inject("RendaConstantRepository")
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(): Promise<RendaConstant[]>{        
        const rendaConstant = await this.rendaConstantRepository.read()

        return rendaConstant
    }
}

export {ReadRendaConstantUseCase}