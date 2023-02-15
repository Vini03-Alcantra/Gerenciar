import { Request, Response } from "express";
import { PersonDependentCPFUseCase } from "./PersonDependentByCPFUseCase";
import { container } from "tsyringe";
class PersonDependentByCPFController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {cpf} = req.params
            
            const personDependentCPFUseCase = container.resolve(
                PersonDependentCPFUseCase
            )

            const personDependent = await personDependentCPFUseCase.execute(cpf)
            
            return res.status(201).json(personDependent)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {PersonDependentByCPFController}
