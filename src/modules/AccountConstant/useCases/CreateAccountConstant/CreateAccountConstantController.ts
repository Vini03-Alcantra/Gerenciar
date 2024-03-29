import { Response, Request } from "express";
import { createAccountConstantUseCase } from "./index";


class CreateAccountConstantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {nameOriginAccount, valueAccount, tipoConta, dateAccount} = req.body;            

            const accountConstant = await createAccountConstantUseCase.execute(
                req.user.uuid,
                {
                    nameOriginAccount, 
                    tipoConta,
                    valueAccount,
                    dateAccount                    
                }
            )

            return res.status(201).json({accountConstant})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

export {CreateAccountConstantController}