import { ICreateRendaVariableDTO } from "modules/rendasVariable/dtos/ICreateRendaVariableDTO";
import { IRendasVariableRepository } from "@modules/rendasVariable/repositories/IRendasVariables";
import { getRepository, Repository } from "typeorm";
import { RendaVariavel } from "../entities/RendaVariavel";

class RendasVariableRepository implements IRendasVariableRepository {
    private repository: Repository<RendaVariavel>;

    constructor(){
        this.repository = getRepository(RendaVariavel)
    }    
    
    async create(
        auth_id: string,
        {
        origemRendaVariable,
        valorRendaVariavel,
        dataRendaVariavel
    }: ICreateRendaVariableDTO): Promise<RendaVariavel> {
        const rendaVariavel = this.repository.create({
            origemRendaVariavel: origemRendaVariable,
            valorRendaVariavel,
            dataRendaVariavel,
            idPerson: auth_id
        })

        await this.repository.save(rendaVariavel)

        return rendaVariavel
    }

    async read(auth_id: string): Promise<RendaVariavel[]> {
        const rendasVariavel = await this.repository.find({
            where: {
                idPerson: auth_id
            }
        })

        return rendasVariavel
    }

    async total(auth_id: string): Promise<Number> {
        let renda = 0;
        const rendasVariavel = await this.repository.find({
            where: {
                idPerson: auth_id
            }
        })
        
        rendasVariavel.filter((item) => {
            renda += Number(item.valorRendaVariavel)
        })

        return renda
    }

}

export {RendasVariableRepository}