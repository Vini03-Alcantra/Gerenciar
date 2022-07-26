import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateAccountConstantUseCase } from "./CreateAccountConstantUseCase";

class CreateAccountConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {nameOriginAccount, valueAccount, tipoConta} = req.body;
            
            const createAccountConstantUseCase = container.resolve(
                CreateAccountConstantUseCase
            )

            const accountConstant = await createAccountConstantUseCase.execute(
                req.user.uuid,
                {
                    nameOriginAccount, 
                    tipoConta,
                    valueAccount                    
                }
            )

            return res.status(201).json({accountConstant})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

export {CreateAccountConstantController}