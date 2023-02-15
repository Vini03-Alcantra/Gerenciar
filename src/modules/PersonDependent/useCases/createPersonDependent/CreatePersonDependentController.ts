import { Request, Response } from "express";
import { CreatePersonDependentuseCase } from "./CreatePersonDependentUseCase";
import { container } from "tsyringe";
class CreatePersonDependentController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {namePerson, emailPerson, birthday, cpf, dependentOnId} = req.body
            
            const createPersonDependentuseCase = container.resolve(
                CreatePersonDependentuseCase
            )

            const personDependent = await createPersonDependentuseCase.execute({namePerson, emailPerson, birthday, cpf, dependentOnId})
            
            return res.status(201).json(personDependent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreatePersonDependentController}
