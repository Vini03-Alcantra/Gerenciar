import { Response, Request } from "express";
import { readRendaConstantUseCase } from "./index";

class ReadRendaContantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const rendaConstant = await readRendaConstantUseCase.execute(req.user.uuid)

            return res.status(201).json(rendaConstant)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {ReadRendaContantController}