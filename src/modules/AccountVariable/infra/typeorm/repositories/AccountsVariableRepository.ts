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
    
    async create(
        auth_id: string,
        {
        nomeOrigemConta, 
        valorConta, 
        tipoConta, 
        dataConta,
        formaPagamento, 
        contaPlanejada
    }: ICreateContaVariableDTO): Promise<AccountVariable> {
        const accountVariable = this.repository.create({
            nomeOrigemConta,
            valorConta,
            tipoConta,
            dataConta,
            formaPagamento,
            contaPlanejada,
            idPerson: auth_id,            
        })

        await this.repository.save(accountVariable)

        return accountVariable
    }

    
    async read(auth_id: string): Promise<AccountVariable[]> {
        const accountVariable = await this.repository.find({where: {
            idPerson: auth_id
        }})
        return accountVariable
    }

    async totalValueMonth(auth_id: string): Promise<Number> {
        let renda = 0;
        const accountVariableList = await this.repository.find({where: {
            idPerson: auth_id
        }});
        accountVariableList.filter((item) => {
            renda += Number(item.valorConta)
        })

        return renda
    }

}

export {AccountsVariableRepository}