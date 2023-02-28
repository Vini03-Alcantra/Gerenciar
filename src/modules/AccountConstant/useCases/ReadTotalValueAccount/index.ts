import {ReadTotalValueAccountConstantUseCase} from "./ReadTotalValueAccountConstantUseCase"
import {AccountsConstantRepository} from "../../infra/typeorm/repositories/AccountsConstantRepository"

const accountsConstantRepository = new AccountsConstantRepository()

const readTotalValueAccountConstantUseCase = new ReadTotalValueAccountConstantUseCase(accountsConstantRepository)

export {readTotalValueAccountConstantUseCase}