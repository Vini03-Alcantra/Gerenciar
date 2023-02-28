import {IAccountsVariableRepository} from "modules/AccountVariable/repositories/IAccountsVariableRepository"
import { AccountVariable } from "@prisma/client";

class ReadAccountVariableUseCase {
    constructor(
        private accountVariableRepository: IAccountsVariableRepository
    ){}

    async execute(auth_id: string): Promise<AccountVariable[]>{
        const accountVariables = await this.accountVariableRepository.read(auth_id)

        return accountVariables
    }
}

export {ReadAccountVariableUseCase}