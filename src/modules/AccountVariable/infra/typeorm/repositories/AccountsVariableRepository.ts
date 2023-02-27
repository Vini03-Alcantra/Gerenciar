import { ICreateContaVariableDTO } from "modules/AccountVariable/dtos/ICreateContaVariableDTO";
import { IAccountsVariableRepository } from "modules/AccountVariable/repositories/IAccountsVariableRepository";

import {AccountVariable, PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()
class AccountsVariableRepository implements IAccountsVariableRepository {
    async create(
        auth_id: string,
        {
        id,
        valueAccount,
        nameOriginAccount,
        formPayment,
        tipoConta,
        plannedAccount,
        dateAccount
    }: ICreateContaVariableDTO): Promise<AccountVariable> {
        const accountVariable = await prisma.accountVariable.create({
            data: {
                id,
                valueAccount,
                nameOriginAccount,
                formPayment,
                typeAccount: tipoConta,
                plannedAccount,
                dateAccount,
                fk_id_person: auth_id,            
            }
        })

        return accountVariable
    }

    
    async read(auth_id: string): Promise<AccountVariable[]> {
        const accountVariable = await prisma.accountVariable.findMany({
            where: {
                fk_id_person: auth_id
            }
        })
        return accountVariable
    }

    async totalValueMonth(auth_id: string): Promise<Number> {
        let renda = 0;
        const accountVariableList = await prisma.accountVariable.findMany({where: {
            fk_id_person: auth_id
        }});
        accountVariableList.filter((item) => {
            renda += Number(item.valueAccount)
        })

        return renda
    }

}

export {AccountsVariableRepository}