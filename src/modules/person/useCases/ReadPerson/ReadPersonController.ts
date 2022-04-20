import { Request, Response } from "express";
import { ReadPersonUseCase } from "./ReadPersonUseCase";
import { container } from "tsyringe";


class ReadPersonController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const readPersonUseCase = container.resolve(
                ReadPersonUseCase
            )
    
            const persons = await readPersonUseCase.execute()
    
            return res.status(201).json(persons)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {ReadPersonController}