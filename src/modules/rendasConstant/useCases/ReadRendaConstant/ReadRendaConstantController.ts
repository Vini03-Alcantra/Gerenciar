import { Response, Request } from "express";
import { container } from "tsyringe";
import { ReadRendaConstantUseCase } from "./ReadRendaConstantUseCase";


class ReadRendaContantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {            
            const readRendaConstantUseCase = container.resolve(
                ReadRendaConstantUseCase
            )

            const rendaConstant = await readRendaConstantUseCase.execute()

            return res.status(201).json(rendaConstant)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {ReadRendaContantController}