import { Request, Response } from "express";
import { PersonDependentEmailUseCase } from "./PersonDependentByEmailUseCase";

import { container } from "tsyringe";

class PersonDependentByEmailController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {email} = req.params
            
            const personDependentEmailUseCase = container.resolve(
                PersonDependentEmailUseCase
            )

            const personDependent = await personDependentEmailUseCase.execute(email)
            
            return res.status(201).json(personDependent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {PersonDependentByEmailController}
