import { Request, Response } from "express";
import { personDependentIDUseCase } from "./index";

class PersonDependentByIDController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {id} = req.params
            const personDependent = await personDependentIDUseCase.execute(id)
            
            return res.status(201).json(personDependent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {PersonDependentByIDController}
