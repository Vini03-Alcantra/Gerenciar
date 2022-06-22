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
        origemRenda, 
        valorRenda, 
        dataRenda,
        id_person
    }: ICreateRendaConstantDTO): Promise<RendaConstant> {
        const rendaConstant = this.repository.create({
            origemRenda,
            valorRenda,
            dataRenda,
            id_person
        })

        await this.repository.save(rendaConstant)
        
        return rendaConstant
    }

    async read(): Promise<RendaConstant[]> {
        const rendasConstant = await this.repository.find()

        return rendasConstant
    }

    async total(): Promise<Number> {
        let total = 0;
        const rendasConstant = await this.repository.find()
        rendasConstant.forEach((item) => {
            total += Number(item.valorRenda)
        })
        return total
    }
}

export {RendaConstantRepository}