import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";

class ReadTotalValueAccountConstantUseCase {
    constructor(
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute(auth_id: string): Promise<Number>{
        const totalValue = await this.accountsConstantRepository.totalValueMonth(auth_id)
        return totalValue
    }
}

export {ReadTotalValueAccountConstantUseCase}