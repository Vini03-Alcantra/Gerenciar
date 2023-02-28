import { Response, Request } from "express";
import { readTotalValueAccountConstantUseCase } from "./index";


class ReadTotalValueAccountConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const readTotalValueAccountConstant = await readTotalValueAccountConstantUseCase.execute(req.user.uuid)
            return res.status(200).json({readTotalValueAccountConstant})
        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

export {ReadTotalValueAccountConstantController}