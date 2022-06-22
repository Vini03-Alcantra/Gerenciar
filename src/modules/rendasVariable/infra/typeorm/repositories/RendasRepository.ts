import { ICreateRendaVariableDTO } from "modules/rendasVariable/dtos/ICreateRendaVariableDTO";
import { IRendasVariableRepository } from "@modules/rendasVariable/repositories/IRendasVariables";
import { getRepository, Repository } from "typeorm";
import { RendaVariavel } from "../entities/RendaVariavel";

class RendasVariableRepository implements IRendasVariableRepository {
    private repository: Repository<RendaVariavel>;

    constructor(){
        this.repository = getRepository(RendaVariavel)
    }    
    
    async create({
        origemRendaVariable,
        valorRendaVariavel,
        dataRendaVariavel,
        idPerson
    }: ICreateRendaVariableDTO): Promise<RendaVariavel> {
        const rendaVariavel = this.repository.create({
            origemRendaVariavel: origemRendaVariable,
            valorRendaVariavel,
            dataRendaVariavel,
            idPerson
        })

        await this.repository.save(rendaVariavel)

        return rendaVariavel
    }

    async read(): Promise<RendaVariavel[]> {
        const rendasVariavel = await this.repository.find()

        return rendasVariavel
    }

    async total(): Promise<Number> {
        let renda = 0;
        const rendasVariavel = await this.repository.find()
        rendasVariavel.filter((item) => {
            renda += Number(item.valorRendaVariavel)
        })

        return renda
    }

}

export {RendasVariableRepository}