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
        dataConta,
        formaPagamento, 
        contaPlanejada, 
        idPerson
    }: ICreateContaVariableDTO): Promise<AccountVariable> {
        const accountVariable = this.repository.create({
            nomeOrigemConta,
            valorConta,
            tipoConta,
            dataConta,
            formaPagamento,
            contaPlanejada,
            idPerson
        })

        await this.repository.save(accountVariable)

        return accountVariable
    }

    
    async read(): Promise<AccountVariable[]> {
        const accountVariable = await this.repository.find()
        return accountVariable
    }

}

export {AccountsVariableRepository}