import { Request, Response } from "express";
import { personDependentEmailUseCase } from "./index";

class PersonDependentByEmailController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {email} = req.params
            const personDependent = await personDependentEmailUseCase.execute(email)
            
            return res.status(201).json(personDependent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {PersonDependentByEmailController}
