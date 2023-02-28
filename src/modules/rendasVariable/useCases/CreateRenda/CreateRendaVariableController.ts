import { Request, Response } from "express";
import { createRendaVariableUseCase } from "./index";

class CreateRendaVariableController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {incomeOrigin, valueIncome, dateIncome} = req.body

            const rendaVariavel = await createRendaVariableUseCase.execute(
                req.user.uuid,
                {
                    incomeOrigin,
                    valueIncome,
                    dateIncome
            })

            return res.status(201).json({rendaVariavel})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreateRendaVariableController}