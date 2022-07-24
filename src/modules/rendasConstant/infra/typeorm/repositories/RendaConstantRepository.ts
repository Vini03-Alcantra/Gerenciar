import { ICreateRendaConstantDTO } from "modules/rendasConstant/dtos/ICreateRendaConstantDTO";
import { IRendaConstantRepository } from "modules/rendasConstant/repositories/IRendaConstantRepository";
import { getRepository, Repository } from "typeorm";
import { RendaConstant } from "../entities/RendaConstant";

class RendaConstantRepository implements IRendaConstantRepository {
    private repository: Repository<RendaConstant>;

    constructor(){
        this.repository = getRepository(RendaConstant)
    }    
    
    async create(
        auth_id: string,
        {
        origemRenda, 
        valorRenda, 
        dataRenda
    }: ICreateRendaConstantDTO): Promise<RendaConstant> {
        const rendaConstant = this.repository.create({
            origemRenda,
            valorRenda,
            dataRenda,
            id_person: auth_id
        })

        await this.repository.save(rendaConstant)
        
        return rendaConstant
    }

    async read(auth_id: string): Promise<RendaConstant[]> {
        const rendasConstant = await this.repository.find({where: {
            id_person: auth_id
        }})

        return rendasConstant
    }

    async total(auth_id: string): Promise<Number> {
        let total = 0;
        const rendasConstant = await this.repository.find({
            where: {
                id_person: auth_id
            }
        })
        rendasConstant.forEach((item) => {
            total += Number(item.valorRenda)
        })
        return total
    }
}

export {RendaConstantRepository}