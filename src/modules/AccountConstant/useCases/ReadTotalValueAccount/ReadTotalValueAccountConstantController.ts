import { Response, Request } from "express";
import { container } from "tsyringe";
import { ReadTotalValueAccountConstantUseCase } from "./ReadTotalValueAccountConstantUseCase";

class ReadTotalValueAccountConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const readTotalValueAccountConstantUseCase = container.resolve(
                ReadTotalValueAccountConstantUseCase
            )

            const readTotalValueAccountConstant = await readTotalValueAccountConstantUseCase.execut()
            return res.status(200).json({readTotalValueAccountConstant})
        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

export {ReadTotalValueAccountConstantController}