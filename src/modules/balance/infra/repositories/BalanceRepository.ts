
import { IBalanceReposritory } from "@modules/balance/repositories/IBalanceRepository";
import {AccountsConstantRepository} from "@modules/AccountConstant/infra/typeorm/repositories/AccountsConstantRepository"
import {AccountsVariableRepository} from "@modules/AccountVariable/infra/typeorm/repositories/AccountsVariableRepository"
import {RendaConstantRepository} from "@modules/rendasConstant/infra/typeorm/repositories/RendaConstantRepository"
import {RendasVariableRepository} from "@modules/rendasVariable/infra/typeorm/repositories/RendasRepository"
import { getRepository, Repository } from "typeorm";
class BalanceRepository implements IBalanceReposritory {
    private repositoryAccountConstant: Repository<AccountsConstantRepository>;
    private repositoryAccountsVariableRepository: Repository<AccountsVariableRepository>;
    private repositoryRendaConstantRepository: Repository<RendaConstantRepository>;
    private repositoryRendasVariableRepository: Repository<RendasVariableRepository>;


    constructor(){
        this.repositoryAccountConstant = getRepository(AccountsConstantRepository)
        this.repositoryAccountsVariableRepository = getRepository(AccountsVariableRepository)
        this.repositoryRendaConstantRepository = getRepository(RendaConstantRepository)
        this.repositoryRendasVariableRepository = getRepository(RendasVariableRepository)
    }
    async balanceMomentMonth(person_id: string): Promise<Number> {
        const accountConstantCurrentMonth = await this.repositoryAccountConstant
            .createQueryBuilder()
            .where("conta_fixa.id_person", {id_person: person_id})
            .getMany()            
        
        
        
        try {
            
        } catch (error) {
            
        }

        throw new Error("Method not implemented.");
    }

    async balanceMomentYear(person_id: string): Promise<Number> {
        throw new Error("Method not implemented.");
    }
}

export {BalanceRepository}