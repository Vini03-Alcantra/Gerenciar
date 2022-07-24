import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
import { getRepository, Repository } from "typeorm";
import {ICreateAccountConstantDTO} from "../../../dtos/ICreateAccountConstantDTO"
import { AccountConstant } from "../entities/AccountConstant";

class AccountsConstantRepository implements IAccountsConstantRepository {
    private repository: Repository<AccountConstant>;

    constructor(){
        this.repository = getRepository(AccountConstant)
    }

    async create(
        auth_id: string,
        {
        nameOriginAccount,
        valueAccount, 
        tipoConta,
    }: ICreateAccountConstantDTO): Promise<AccountConstant> {
        const accountConstant = this.repository.create({
            nameOriginAccount,
            valueAccount,
            tipoConta,
            id_person: auth_id,
            dateAccount: new Date()
        })    

        await this.repository.save(accountConstant)

        return accountConstant
    }

    async read(auth_id: string): Promise<AccountConstant[]> {
        const accountConstantList = await this.repository.find({
            where: {
                id_person: auth_id
            }
        });

        return accountConstantList
    }

    async totalValueMonth(auth_id: string): Promise<Number> {
        let renda = 0;
        const accountConstantList = await this.repository.find({
            where: {
                id_person: auth_id
            }
        });
        accountConstantList.filter((item) => {
            renda += Number(item.valueAccount)
        })

        return renda
    }
}

export {AccountsConstantRepository}