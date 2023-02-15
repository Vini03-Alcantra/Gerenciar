import { Request, Response } from "express";
import { PersonDependentIDUseCase } from "./PersonDependentByIDUseCase";

import { container } from "tsyringe";

class PersonDependentByIDController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {id} = req.params
            
            const personDependentIDUseCase = container.resolve(
                PersonDependentIDUseCase
            )

            const personDependent = await personDependentIDUseCase.execute(id)
            
            return res.status(201).json(personDependent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {PersonDependentByIDController}
