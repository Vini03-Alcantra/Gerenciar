import { Request, Response } from "express";
import {createPersonDependentUseCase} from "./index"

class CreatePersonDependentController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {namePerson, emailPerson, birthday, cpf, dependentOnId} = req.body
            
            const personDependent = await createPersonDependentUseCase.execute({
                namePerson, 
                emailPerson, 
                birthday, 
                cpf, 
                dependentOnId
            })
            
            return res.status(201).json(personDependent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreatePersonDependentController}
