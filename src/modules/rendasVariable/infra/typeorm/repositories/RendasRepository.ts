import { ICreateRendaVariableDTO } from "modules/rendasVariable/dtos/ICreateRendaVariableDTO";
import { IRendasVariableRepository } from "modules/rendasVariable/repositories/IRendasVariablesConstant";
import { getRepository, Repository } from "typeorm";
import { RendaVariavel } from "../entities/RendaVariavel";

class RendasVariableRepository implements IRendasVariableRepository {
    private repository: Repository<RendaVariavel>;

    constructor(){
        this.repository = getRepository(RendaVariavel)
    }

    async create({
        origemRendaVariavle,
        valorRendaVariavel,
        dataRendaVariavel,
        idPerson
    }: ICreateRendaVariableDTO): Promise<RendaVariavel> {
        const rendaVariavel = this.repository.create({
            origemRendaVariavel: origemRendaVariavle,
            valorRendaVariavel,
            dataRendaVariavel,
            idPerson
        })

        await this.repository.save(rendaVariavel)

        return rendaVariavel
    }

}

export {RendasVariableRepository}