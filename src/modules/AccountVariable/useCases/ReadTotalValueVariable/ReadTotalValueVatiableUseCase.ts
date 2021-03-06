import { ICreateAccountConstantDTO } from "modules/AccountConstant/dtos/ICreateAccountConstantDTO";
import { AccountConstant } from "modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ReadTotalValueVariableUseCase {
    constructor(
        @inject("AccountsVariableRepository")
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute (): Promise<Number>{
        const accountConstant = await this.accountsConstantRepository.totalValueMonth()

        return accountConstant
    }
}

export {ReadTotalValueVariableUseCase}