import {GetBalanceCurrentMonthUseCase} from "./GetBalanceCurrentMonthUseCase"
import {BalanceRepository} from "../../infra/repositories/BalanceRepository"

const balanceRepository = new BalanceRepository()
const getBalanceCurrentMonthUseCase = new GetBalanceCurrentMonthUseCase(balanceRepository)

export {getBalanceCurrentMonthUseCase}