import { AccountConstant } from "@prisma/client";
import { ICreateAccountConstantDTO } from "modules/AccountConstant/dtos/ICreateAccountConstantDTO";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";

class CreateAccountConstantUseCase {
    constructor(
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute (auth_id: string, {nameOriginAccount, valueAccount, tipoConta}: ICreateAccountConstantDTO): Promise<AccountConstant>{
        const accountConstant = await this.accountsConstantRepository.create(
            auth_id,
            {
                nameOriginAccount, 
                tipoConta,
                valueAccount
            }
        )

        return accountConstant
    }
}

export {CreateAccountConstantUseCase}