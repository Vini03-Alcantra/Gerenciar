import { Request, Response } from "express";
import { createAccountVariableUseCase } from "./index";
class CreateAccountVariableController {
    async handle(req: Request, res: Response): Promise<Response>{        
        try{
            const {nameOriginAccount, valueAccount, tipoConta, dateAccount, formPayment, plannedAccount} = req.body;
            
            const accountVariable = await createAccountVariableUseCase.execute(
                req.user.uuid,
                {
                nameOriginAccount,
                valueAccount,
                tipoConta,
                dateAccount,
                formPayment,
                plannedAccount
            })

            return res.status(201).json({accountVariable})            
        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}

export {CreateAccountVariableController}