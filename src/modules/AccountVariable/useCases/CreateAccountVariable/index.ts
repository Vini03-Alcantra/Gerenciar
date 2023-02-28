import {CreateAccountVariableUseCase} from "./CreateAccountVariableUseCase"
import {AccountsVariableRepository} from "../../infra/typeorm/repositories/AccountsVariableRepository"

const accountsVariableRepository = new AccountsVariableRepository()

const createAccountVariableUseCase = new CreateAccountVariableUseCase(accountsVariableRepository)

export {createAccountVariableUseCase}