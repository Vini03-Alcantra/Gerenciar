import { Router } from "express";
import {GetBalanceCurrentMonthController} from "../../../../modules/balance/useCase/getBalanceCurrentMonth/getBalanceCurrentMonthController"

const balanceRouter = Router()
const getBalanceCurrentMonthController = new GetBalanceCurrentMonthController()

balanceRouter.get("/month", getBalanceCurrentMonthController.handle)

export {balanceRouter}