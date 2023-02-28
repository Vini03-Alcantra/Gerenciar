import { AccountConstant } from "@prisma/client";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";

class ReadAccountConstantUseCase {
    constructor(
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute (auth_id: string): Promise<AccountConstant[]>{
        const accountConstant = await this.accountsConstantRepository.read(auth_id)

        return accountConstant
    }
}

export {ReadAccountConstantUseCase}