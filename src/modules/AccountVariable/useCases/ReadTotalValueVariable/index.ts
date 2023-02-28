import {ReadTotalValueVariableUseCase} from "./ReadTotalValueVatiableUseCase"
import {AccountsVariableRepository} from "../../infra/typeorm/repositories/AccountsVariableRepository"

const accountsVariableRepository = new AccountsVariableRepository()

const readAccountConstantUseCase = new ReadTotalValueVariableUseCase(accountsVariableRepository)

export {readAccountConstantUseCase}