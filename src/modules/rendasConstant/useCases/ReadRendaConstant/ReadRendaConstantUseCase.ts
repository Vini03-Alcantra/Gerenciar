import { inject, injectable } from "tsyringe";
import { RendaConstant } from "../../infra/typeorm/entities/RendaConstant";
import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";

@injectable()
class ReadRendaConstantUseCase {
    
    constructor(
        @inject("RendaConstantRepository")
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(auth_id: string): Promise<RendaConstant[]>{        
        const rendaConstant = await this.rendaConstantRepository.read(auth_id)

        return rendaConstant
    }
}

export {ReadRendaConstantUseCase}