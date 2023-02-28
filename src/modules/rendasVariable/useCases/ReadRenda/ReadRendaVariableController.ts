import { Request, Response } from "express";
import { readRendaVariableUseCase } from "./index";

class ReadRendaVariableController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const rendaVariavel = await readRendaVariableUseCase.execute(req.user.uuid)

            return res.status(201).json({rendaVariavel})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {ReadRendaVariableController}