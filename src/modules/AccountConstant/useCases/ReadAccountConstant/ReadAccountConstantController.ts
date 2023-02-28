import { Response, Request } from "express";
import { readAccountConstantUseCase } from "./index";

class ReadAccountConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const accountConstant = await readAccountConstantUseCase.execute(req.user.uuid)

            return res.status(201).json({accountConstant})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

export {ReadAccountConstantController}