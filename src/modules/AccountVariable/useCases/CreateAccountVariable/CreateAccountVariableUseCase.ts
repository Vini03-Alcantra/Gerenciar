import {ICreateContaVariableDTO} from "modules/AccountVariable/dtos/ICreateContaVariableDTO"
import {IAccountsVariableRepository} from "modules/AccountVariable/repositories/IAccountsVariableRepository"
import { AccountVariable } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

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
        const id = uuidV4();
        const accountVariable = await this.accountVariableRepository.create(
            auth_id,
            {
                id,
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