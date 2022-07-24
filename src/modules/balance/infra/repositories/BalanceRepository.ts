
import { IBalanceReposritory } from "@modules/balance/repositories/IBalanceRepository";
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";

import { getRepository, Repository } from "typeorm";
import { AccountConstant } from "../../../../modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { AccountVariable } from "../../../../modules/AccountVariable/infra/typeorm/entities/AccountVariable";
import { RendaConstant } from "../../../../modules/rendasConstant/infra/typeorm/entities/RendaConstant";
import { RendaVariavel } from "../../../../modules/rendasVariable/infra/typeorm/entities/RendaVariavel";
class BalanceRepository implements IBalanceReposritory {
    private repositoryAccountConstant: Repository<AccountConstant>;                 
    private repositoryAccountsVariable: Repository<AccountVariable>;
    private repositoryRendaConstant: Repository<RendaConstant>;
    private repositoryRendasVariable: Repository<RendaVariavel>;


    private providerDate: DayjsDateProvider;

    constructor(){
        this.repositoryAccountConstant = getRepository(AccountConstant)
        this.repositoryAccountsVariable = getRepository(AccountVariable)
        this.repositoryRendaConstant = getRepository(RendaConstant)
        this.repositoryRendasVariable = getRepository(RendaVariavel)
        this.providerDate = new DayjsDateProvider()
    }
    async balanceMomentMonth(person_id: string): Promise<Number> {
        let income = 0;
        let spent = 0;
        try {
            const today = this.providerDate.dateNow()
            const firstDayMonth = this.providerDate.firstDayMonth()
            
            const accountConstantCurrentMonth = await this.repositoryAccountConstant
                .createQueryBuilder("conta_fixa")
                .where("conta_fixa.id_person = :id_person AND conta_fixa.data_conta BETWEEN :first_day AND :today", {id_person: person_id, first_day: firstDayMonth, today: today})
                .getMany()            

            accountConstantCurrentMonth.filter((item) => {
                spent += Number(item.valueAccount)
            })
            
            // const accountVariableCurrentMonth = await this.repositoryAccountsVariable
            //     .createQueryBuilder("conta_variavel")
            //     .where("conta_variavel.id_person = :id_person AND conta_variavel.data_conta BETWEEN :first_day AND :today", {id_person: person_id, first_day: firstDayMonth, today: today})
            //     .getMany()            
            // console.log("account", accountVariableCurrentMonth)
            // accountVariableCurrentMonth.filter((item) => {                
            //     spent += Number(item.valorConta)
            // })

            const rendaFixaCurrentMonth = await this.repositoryRendaConstant
                .createQueryBuilder("renda_fixa")
                .where("renda_fixa.id_person = :id_person AND renda_fixa.data_renda BETWEEN :first_day AND :today", {id_person: person_id, first_day: firstDayMonth, today: today})
                .getMany()

            rendaFixaCurrentMonth.filter((item) => 
                income += Number(item.valorRenda)
            )

            const rendaVariableCurrentMonth = await this.repositoryRendasVariable
                .createQueryBuilder("renda_variavel")
                .where("renda_variavel.id_person = :id_person AND renda_variavel.data_renda_variavel BETWEEN :first_day AND :today", {id_person: person_id, first_day: firstDayMonth, today: today})
                .getMany()

            rendaVariableCurrentMonth.filter((item) => 
                income += Number(item.valorRendaVariavel)
            )

            console.log(income)
            return spent
        } catch (error) {
            throw new Error("happend error")
        }
    }

    async balanceMomentYear(person_id: string): Promise<Number> {
        throw new Error("Method not implemented.");
    }
}

export {BalanceRepository}