import { inject, injectable } from "tsyringe";
import { ICreateRendaConstantDTO } from "../../dtos/ICreateRendaConstantDTO";
import { RendaConstant } from "../../infra/typeorm/entities/RendaConstant";
import { IRendaConstantRepository } from "../../repositories/IRendaConstantRepository";

@injectable()
class CreateRendaConstantUseCase {
    
    constructor(
        @inject("RendaConstantRepository")
        private rendaConstantRepository: IRendaConstantRepository
    ){}

    async execute(
        auth_id: string,
        {
        origemRenda, 
        valorRenda, 
        dataRenda        
    }: ICreateRendaConstantDTO): Promise<RendaConstant>{        
        const rendaConstant = await this.rendaConstantRepository.create(
            auth_id,
            {
            origemRenda,
            valorRenda,
            dataRenda
        })

        return rendaConstant
    }
}

export {CreateRendaConstantUseCase}