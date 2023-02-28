import { Request, Response } from "express";
import { createPersonUseCase } from "./index";

class CreatePersonController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {namePerson, agePerson, emailPerson, birthday, cpf} = req.body
            const person = await createPersonUseCase.execute({
                namePerson,
                agePerson,
                emailPerson,
                birthday, 
                cpf
            })
            
            return res.status(201).json(person)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreatePersonController}
