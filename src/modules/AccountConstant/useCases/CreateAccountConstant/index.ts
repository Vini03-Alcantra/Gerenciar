import {CreateAccountConstantUseCase} from "./CreateAccountConstantUseCase"
import {AccountsConstantRepository} from "../../infra/typeorm/repositories/AccountsConstantRepository"

const accountsConstantRepository = new AccountsConstantRepository()

const createAccountConstantUseCase = new CreateAccountConstantUseCase(accountsConstantRepository)

export {createAccountConstantUseCase}