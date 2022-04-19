import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
import { getRepository, Repository } from "typeorm";
import {ICreateAccountConstantDTO} from "../../../dtos/ICreateAccountConstantDTO"
import { AccountConstant } from "../entities/AccountConstant";

class AccountsConstantRepository implements IAccountsConstantRepository {
    private repository: Repository<AccountConstant>;

    constructor(){
        this.repository = getRepository(AccountConstant)
    }
    
    async create({
        nameOriginAccount,
        valueAccount, 
        idPerson
    }: ICreateAccountConstantDTO): Promise<AccountConstant> {
        const accountConstant = this.repository.create({
            nameOriginAccount,
            valueAccount,
            id_person: idPerson,
            dateAccount: new Date()
        })    

        await this.repository.save(accountConstant)

        return accountConstant
    }

}

export {AccountsConstantRepository}