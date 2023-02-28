import { Request, Response } from "express";
import { totalRendaVariableUseCase } from "./index";

class TotalRendaVariableController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const rendaVariavel = await totalRendaVariableUseCase.execute(req.user.uuid)

            return res.status(201).json({rendaVariavel})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {TotalRendaVariableController}