import { Request, Response } from "express";
import { readPersonUseCase } from "./index";


class ReadPersonController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const persons = await readPersonUseCase.execute()
    
            return res.status(201).json(persons)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {ReadPersonController}