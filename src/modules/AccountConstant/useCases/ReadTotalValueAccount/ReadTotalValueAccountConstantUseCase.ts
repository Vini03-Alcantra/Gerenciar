import { inject, injectable } from "tsyringe";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
@injectable()
class ReadTotalValueAccountConstantUseCase {
    constructor(
        @inject("AccountsConstantRepository")
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute(auth_id: string): Promise<Number>{
        const totalValue = await this.accountsConstantRepository.totalValueMonth(auth_id)
        return totalValue
    }
}

export {ReadTotalValueAccountConstantUseCase}