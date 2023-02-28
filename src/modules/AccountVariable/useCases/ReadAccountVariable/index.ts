import {ReadAccountVariableUseCase} from "./ReadAccountVariableUseCase"
import {AccountsVariableRepository} from "../../infra/typeorm/repositories/AccountsVariableRepository"

const accountsVariableRepository = new AccountsVariableRepository()

const readAccountVariableUseCase = new ReadAccountVariableUseCase(accountsVariableRepository)

export {readAccountVariableUseCase}