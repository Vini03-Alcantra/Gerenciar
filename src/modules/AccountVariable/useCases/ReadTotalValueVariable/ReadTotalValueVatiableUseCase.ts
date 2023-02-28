import { IAccountsVariableRepository } from "modules/AccountVariable/repositories/IAccountsVariableRepository";

class ReadTotalValueVariableUseCase {
    constructor(
        private accountsVariableRepository: IAccountsVariableRepository
    ){}

    async execute (auth_id: string): Promise<Number>{
        const accountConstant = await this.accountsVariableRepository.totalValueMonth(auth_id)

        return accountConstant
    }
}

export {ReadTotalValueVariableUseCase}