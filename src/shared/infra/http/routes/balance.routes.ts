import { Router } from "express";
import {GetBalanceCurrentMonthController} from "../../../../modules/balance/useCase/getBalanceCurrentMonth/GetBalanceCurrentMonthController"

const balanceRouter = Router()
const getBalanceCurrentMonthController = new GetBalanceCurrentMonthController()

balanceRouter.get("/month", 
    /*
        #swagger.description = 'Route for balance. you can see the total of yor sald'
    */
    getBalanceCurrentMonthController.handle
)

export {balanceRouter}