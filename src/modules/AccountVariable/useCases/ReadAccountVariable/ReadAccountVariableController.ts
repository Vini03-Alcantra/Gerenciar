import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReadAccountVariableUseCase } from "./ReadAccountVariableUseCase";

class ReadAccountVariableController {
    async handle(req: Request, res: Response): Promise<Response>{        
        try{
            const readAccountVariableUseCase = container.resolve(ReadAccountVariableUseCase)

            const accountVariable = await readAccountVariableUseCase.execute()

            return res.status(201).json({accountVariable})            
        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}

export {ReadAccountVariableController}