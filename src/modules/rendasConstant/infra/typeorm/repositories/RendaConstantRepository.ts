import { ICreateRendaConstantDTO } from "modules/rendasConstant/dtos/ICreateRendaConstantDTO";
import { IRendaConstantRepository } from "modules/rendasConstant/repositories/IRendaConstantRepository";
import { getRepository, Repository } from "typeorm";
import { RendaConstant } from "../entities/RendaConstant";

class RendaConstantRepository implements IRendaConstantRepository {
    private repository: Repository<RendaConstant>;

    constructor(){
        this.repository = getRepository(RendaConstant)
    }

    async create({
        originRenda, 
        valorRenda, 
        dataRenda,
        id_person
    }: ICreateRendaConstantDTO): Promise<RendaConstant> {
        const rendaConstant = this.repository.create({
            origemRenda: originRenda,
            valorRenda,
            dataRenda,
            id_person
        })

        await this.repository.save(rendaConstant)
        
        return rendaConstant
    }
}

export {RendaConstantRepository}