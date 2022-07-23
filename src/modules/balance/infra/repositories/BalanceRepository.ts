
import { IBalanceReposritory } from "@modules/balance/repositories/IBalanceRepository";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";

import { getRepository, Repository } from "typeorm";
import { AccountConstant } from "@modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { AccountVariable } from "@modules/AccountVariable/infra/typeorm/entities/AccountVariable";
import { RendaConstant } from "@modules/rendasConstant/infra/typeorm/entities/RendaConstant";
import { RendaVariavel } from "@modules/rendasVariable/infra/typeorm/entities/RendaVariavel";
class BalanceRepository implements IBalanceReposritory {
    private repositoryAccountConstant: Repository<AccountConstant>;
    private repositoryAccountsVariableRepository: Repository<AccountVariable>;
    private repositoryRendaConstantRepository: Repository<RendaConstant>;
    private repositoryRendasVariableRepository: Repository<RendaVariavel>;


    private providerDate: DayjsDateProvider;

    constructor(){
        this.repositoryAccountConstant = getRepository(AccountConstant)
        this.repositoryAccountsVariableRepository = getRepository(AccountVariable)
        this.repositoryRendaConstantRepository = getRepository(RendaConstant)
        this.repositoryRendasVariableRepository = getRepository(RendaVariavel)
        this.providerDate = new DayjsDateProvider()
    }
    async balanceMomentMonth(person_id: string): Promise<Number> {
        let renda = 0;
        try {
            const today = this.providerDate.dateNow()
            const firstDayMonth = this.providerDate.firstDayMonth()
            const accountConstantCurrentMonth = await this.repositoryAccountConstant
                .createQueryBuilder("conta_fixa")
                .where("conta_fixa.id_person = :id_person AND conta_fixa.data_conta BETWEEN :first_day AND :today", {id_person: person_id, first_day: firstDayMonth, today: today})
                .getMany()            
            const valueAccountConstant = accountConstantCurrentMonth.filter((item) => {
                renda += Number(item.valueAccount)
            })
            return renda
        } catch (error) {
            
        }

        throw new Error("Method not implemented.");
    }

    async balanceMomentYear(person_id: string): Promise<Number> {
        throw new Error("Method not implemented.");
    }
}

export {BalanceRepository}