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

    async execute({
        originRenda, 
        valorRenda, 
        dataRenda,
        id_person
    }: ICreateRendaConstantDTO): Promise<RendaConstant>{        
        const rendaConstant = await this.rendaConstantRepository.create({
            originRenda,
            valorRenda,
            dataRenda,
            id_person
        })

        return rendaConstant
    }
}

export {CreateRendaConstantUseCase}