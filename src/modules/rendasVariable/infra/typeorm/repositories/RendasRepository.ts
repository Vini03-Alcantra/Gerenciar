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

}

export {RendasVariableRepository}