import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
import {ICreateAccountConstantDTO} from "../../../dtos/ICreateAccountConstantDTO"

import {AccountConstant, PrismaClient} from "@prisma/client"
import { v4 as uuidV4 } from "uuid";

const prisma = new PrismaClient()
class AccountsConstantRepository implements IAccountsConstantRepository {

    async create(
        auth_id: string,
        {
        nameOriginAccount,
        dateAccount,
        valueAccount, 
        tipoConta,
    }: ICreateAccountConstantDTO): Promise<AccountConstant> {
        const id = uuidV4()
        const accountConstant = prisma.accountConstant.create({
            data: {
                id,
                dateAccount,
                nameOriginAccount,
                valueAccount,
                accountType: tipoConta,
                fk_id_person: auth_id,
            }
        })  

        return accountConstant
    }

    async read(auth_id: string): Promise<AccountConstant[]> {
        const accountConstantList = await prisma.accountConstant.findMany({
            where: {
                fk_id_person: auth_id
            }
        })

        return accountConstantList
    }

    async totalValueMonth(auth_id: string): Promise<Number> {
        let renda = 0;
        const accountConstantList = await prisma.accountConstant.findMany({
            where: {
                fk_id_person: auth_id
            }
        });
        accountConstantList.filter((item) => {
            renda += Number(item.valueAccount)
        })

        return renda
    }
}

export {AccountsConstantRepository}