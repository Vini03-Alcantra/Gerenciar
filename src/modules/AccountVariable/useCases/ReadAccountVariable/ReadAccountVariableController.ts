import { Request, Response } from "express";
import { readAccountVariableUseCase } from "./index";

class ReadAccountVariableController {
    async handle(req: Request, res: Response): Promise<Response>{        
        try{
            const accountVariable = await readAccountVariableUseCase.execute(req.user.uuid)

            return res.status(201).json({accountVariable})            
        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}

export {ReadAccountVariableController}