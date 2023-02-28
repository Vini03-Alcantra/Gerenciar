import { ICreateRendaConstantDTO } from "modules/rendasConstant/dtos/ICreateRendaConstantDTO";
import { IRendaConstantRepository } from "modules/rendasConstant/repositories/IRendaConstantRepository";

import {SteadyIncome, PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

class RendaConstantRepository implements IRendaConstantRepository {

    async create(
        {
            id,
            fk_id_person,
            incomeOrigin,
            valueIncome,
            dateIncome
    }: ICreateRendaConstantDTO): Promise<SteadyIncome> {
        const steadyIncome = await prisma.steadyIncome.create({
            data: {
                id,
                incomeOrigin,
                valueIncome,
                dateIncome,
                fk_id_person
            }
        })
        return steadyIncome 
    }

    async read(auth_id: string): Promise<SteadyIncome[]> {
        const steadyIncome = await prisma.steadyIncome.findMany({
            where: {
                fk_id_person: auth_id
            }
        })

        return steadyIncome
    }

    async total(auth_id: string): Promise<Number> {
        let total = 0;
        const rendasConstant = await prisma.steadyIncome.findMany({
            where: {
                fk_id_person: auth_id
            }
        })
        rendasConstant.forEach((item) => {
            total += Number(item.valueIncome)
        })
        return total
    }
}

export {RendaConstantRepository}