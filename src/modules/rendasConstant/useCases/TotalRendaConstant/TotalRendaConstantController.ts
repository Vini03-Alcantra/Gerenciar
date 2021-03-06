import { Response, Request } from "express";
import { container } from "tsyringe";
import { TotalRendaConstantUseCase } from "./TotalRendaConstantUseCase";


class TotalRendaConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {            
            const totalRendaConstantUseCase = container.resolve(
                TotalRendaConstantUseCase
            )

            const rendaConstant = await totalRendaConstantUseCase.execute()

            return res.status(201).json(rendaConstant)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {TotalRendaConstantController}