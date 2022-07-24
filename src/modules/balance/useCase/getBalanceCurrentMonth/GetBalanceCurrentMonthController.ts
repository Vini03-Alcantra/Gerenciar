import { Response, Request } from "express";
import { container } from "tsyringe";
import {GetBalanceCurrentMonthUseCase} from "./getBalanceCurrentMonthUseCase"

class GetBalanceCurrentMonthController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const getBalanceCurrentMonthUseCase = container.resolve(
                GetBalanceCurrentMonthUseCase
            )

            const getBalanceCurrent = await getBalanceCurrentMonthUseCase.execute(req.user.uuid)
            console.log(getBalanceCurrent)
            return res.status(201).json(getBalanceCurrent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {GetBalanceCurrentMonthController}