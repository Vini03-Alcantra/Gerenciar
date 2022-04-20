import { Response, Request } from "express";
import { container } from "tsyringe";
import { ReadAccountConstantUseCase } from "./ReadAccountConstantUseCase";

class ReadAccountConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const readAccountConstantUseCase = container.resolve(
                ReadAccountConstantUseCase
            )

            const accountConstant = await readAccountConstantUseCase.execute()

            return res.status(201).json({accountConstant})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

export {ReadAccountConstantController}