import {ReadAccountConstantUseCase} from "./ReadAccountConstantUseCase"
import {AccountsConstantRepository} from "../../infra/typeorm/repositories/AccountsConstantRepository"

const accountsConstantRepository = new AccountsConstantRepository()

const readAccountConstantUseCase = new ReadAccountConstantUseCase(accountsConstantRepository)

export {readAccountConstantUseCase}