import { Request, Response } from "express";
import { CreatePersonUseCase } from "./CreatePersonUseCase";
import { container } from "tsyringe";
class CreatePersonController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {nomePerson, idadePerson, emailPerson} = req.body
            
            const createPersonUseCase = container.resolve(CreatePersonUseCase)

            const person = await createPersonUseCase.execute({
                nomePerson,
                idadePerson,
                emailPerson
            })
            console.log(person)
            return res.status(201).json({msg: person})
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreatePersonController}
