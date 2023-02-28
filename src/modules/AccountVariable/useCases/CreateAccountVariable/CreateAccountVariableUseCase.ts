import {ICreateContaVariableDTO} from "modules/AccountVariable/dtos/ICreateContaVariableDTO"
import {IAccountsVariableRepository} from "modules/AccountVariable/repositories/IAccountsVariableRepository"
import { AccountVariable } from "@prisma/client";


class CreateAccountVariableUseCase {
    constructor(
        private accountVariableRepository: IAccountsVariableRepository
    ){}

    async execute(
        auth_id: string, 
        {
            nameOriginAccount,
            valueAccount,
            tipoConta,
            dateAccount,
            formPayment,
            plannedAccount
    }: ICreateContaVariableDTO): Promise<AccountVariable>{
        const accountVariable = await this.accountVariableRepository.create(
            auth_id,
            {
                nameOriginAccount,
                valueAccount,
                tipoConta,
                dateAccount,
                formPayment,
                plannedAccount
        })

        return accountVariable
    }
}

export {CreateAccountVariableUseCase}