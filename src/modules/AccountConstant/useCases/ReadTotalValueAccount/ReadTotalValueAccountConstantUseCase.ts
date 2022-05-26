import { inject, injectable } from "tsyringe";
import { AccountConstant } from "modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
@injectable()
class ReadTotalValueAccountConstantUseCase {
    constructor(
        @inject("AccountsConstantRepository")
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execut(): Promise<Number>{
        const totalValue = await this.accountsConstantRepository.totalValueMonth()
        return totalValue
    }
}

export {ReadTotalValueAccountConstantUseCase}