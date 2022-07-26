import {ICreateContaVariableDTO} from "modules/AccountVariable/dtos/ICreateContaVariableDTO"
import { AccountVariable } from "modules/AccountVariable/infra/typeorm/entities/AccountVariable";
import { inject, injectable } from "tsyringe";
import {IAccountsVariableRepository} from "modules/AccountVariable/repositories/IAccountsVariableRepository"


@injectable()
class ReadAccountVariableUseCase {
    constructor(
        @inject("AccountsVariableRepository")
        private accountVariableRepository: IAccountsVariableRepository
    ){}

    async execute(auth_id: string): Promise<AccountVariable[]>{
        const accountVariables = await this.accountVariableRepository.read(auth_id)

        return accountVariables
    }
}

export {ReadAccountVariableUseCase}