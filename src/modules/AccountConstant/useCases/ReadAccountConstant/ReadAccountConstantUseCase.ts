import { ICreateAccountConstantDTO } from "modules/AccountConstant/dtos/ICreateAccountConstantDTO";
import { AccountConstant } from "modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ReadAccountConstantUseCase {
    constructor(
        @inject("AccountsConstantRepository")
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute (auth_id: string): Promise<AccountConstant[]>{
        const accountConstant = await this.accountsConstantRepository.read(auth_id)

        return accountConstant
    }
}

export {ReadAccountConstantUseCase}