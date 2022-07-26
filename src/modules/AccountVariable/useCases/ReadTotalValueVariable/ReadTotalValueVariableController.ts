import { Response, Request } from "express";
import { container } from "tsyringe";
import { ReadTotalValueVariableUseCase } from "./ReadTotalValueVatiableUseCase";

class ReadTotalValueVariableController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const readAccountConstantUseCase = container.resolve(
                ReadTotalValueVariableUseCase
            )

            const accountConstant = await readAccountConstantUseCase.execute(req.user.uuid)

            return res.status(201).json({accountConstant})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

export {ReadTotalValueVariableController}