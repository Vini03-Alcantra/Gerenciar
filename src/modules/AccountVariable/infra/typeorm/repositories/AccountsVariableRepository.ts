import { AccountConstant } from "modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { ICreateContaVariableDTO } from "modules/AccountVariable/dtos/ICreateContaVariableDTO";
import { IAccountsVariableRepository } from "modules/AccountVariable/repositories/IAccountsVariableRepository";
import { getRepository, Repository } from "typeorm";
import { AccountVariable } from "../entities/AccountVariable";

class AccountsVariableRepository implements IAccountsVariableRepository {

    private repository: Repository<AccountVariable>;

    constructor(){
        this.repository = getRepository(AccountVariable)
    }

    async create({
        nomeOrigemConta, 
        valorConta, 
        tipoConta, 
        formaPagamento, 
        contaPlanejada, 
        idPerson
    }: ICreateContaVariableDTO): Promise<AccountVariable> {
        const accountVariable = this.repository.create({
            nomeOrigemConta,
            valorConta,
            tipoConta,
            dataConta: new Date(),
            formaPagamento,
            contaPlanejada,
            idPerson
        })

        await this.repository.save(accountVariable)

        return accountVariable
    }

}

export {AccountsVariableRepository}