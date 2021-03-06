import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAccountVariableUseCase } from "./CreateAccountVariableUseCase";

class CreateAccountVariableController {
    async handle(req: Request, res: Response): Promise<Response>{        
        try{
            const {nomeOrigemConta, valorConta, tipoConta, dataConta, formaPagamento, contaPlanejada, idPerson} = req.body;
            
            const createAccountVariableUseCase = container.resolve(
                CreateAccountVariableUseCase
            )

            const accountVariable = await createAccountVariableUseCase.execute({
                nomeOrigemConta,
                valorConta,
                tipoConta,
                dataConta,
                formaPagamento,
                contaPlanejada,
                idPerson
            })

            return res.status(201).json({accountVariable})            
        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    }
}

export {CreateAccountVariableController}