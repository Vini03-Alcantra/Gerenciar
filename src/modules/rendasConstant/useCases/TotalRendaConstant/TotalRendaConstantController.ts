import { Response, Request } from "express";
import { totalRendaConstantUseCase } from "./index";


class TotalRendaConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const rendaConstant = await totalRendaConstantUseCase.execute(req.user.uuid)

            return res.status(201).json(rendaConstant)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {TotalRendaConstantController}