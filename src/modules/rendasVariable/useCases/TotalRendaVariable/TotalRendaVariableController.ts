import { Request, Response } from "express";
import { container } from "tsyringe";
import { TotalRendaVariableUseCase } from "./TotalRendaVariableUseCase";

class TotalRendaVariableController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {            
            const totalRendaVariableUseCase = container.resolve(
                TotalRendaVariableUseCase
            )

            const rendaVariavel = await totalRendaVariableUseCase.execute()

            return res.status(201).json({rendaVariavel})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {TotalRendaVariableController}