import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRendaVariableUseCase } from "./CreateRendaVariableUseCase";

class CreateRendaVariableController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {origemRendaVariable, valorRendaVariavel, dataRendaVariavel, idPerson} = req.body

            const createRendaVariavel = container.resolve(
                CreateRendaVariableUseCase
            )

            const rendaVariavel = await createRendaVariavel.execute({
                origemRendaVariable, 
                valorRendaVariavel, 
                dataRendaVariavel, 
                idPerson
            })

            return res.status(201).json({rendaVariavel})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreateRendaVariableController}