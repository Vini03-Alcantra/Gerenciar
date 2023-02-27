import { ICreateRendaVariableDTO } from "modules/rendasVariable/dtos/ICreateRendaVariableDTO";
import { IRendasVariableRepository } from "@modules/rendasVariable/repositories/IRendasVariables";
import {PrismaClient, VariableIncome} from "@prisma/client"

const prisma = new PrismaClient()
class RendasVariableRepository implements IRendasVariableRepository {

    async create(
        auth_id: string,
        {
        id,
        incomeOrigin,
        valueIncome,
        dateIncome
    }: ICreateRendaVariableDTO): Promise<VariableIncome> {
        const rendaVariavel = await prisma.variableIncome.create({
            data: {
                id,
                fk_id_person: auth_id,
                incomeOrigin,
                valueIncome,
                dateIncome
            }
        })

        return rendaVariavel
    }

    async read(auth_id: string): Promise<VariableIncome[]> {
        const rendasVariavel = await prisma.variableIncome.findMany({
            where: {
                fk_id_person: auth_id
            }
        })

        return rendasVariavel
    }

    async total(auth_id: string): Promise<Number> {
        let renda = 0;
        const rendasVariavel = await prisma.variableIncome.findMany({
            where: {
                fk_id_person: auth_id
            }
        })
        
        rendasVariavel.filter((item) => {
            renda += Number(item.valueIncome)
        })

        return renda
    }

}

export {RendasVariableRepository}