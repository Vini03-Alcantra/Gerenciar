import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReadRendaVariableUseCase } from "./ReadRentalVariableUseCase";

class ReadRendaVariableController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const readRendaVariableUseCase = container.resolve(
                ReadRendaVariableUseCase
            )

            const rendaVariavel = await readRendaVariableUseCase.execute()

            return res.status(201).json({rendaVariavel})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {ReadRendaVariableController}