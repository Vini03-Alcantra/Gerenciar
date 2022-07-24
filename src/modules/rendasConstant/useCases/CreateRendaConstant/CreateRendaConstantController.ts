import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateRendaConstantUseCase } from "./CreateRendaConstantUseCase";


class CreateRendaContantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { origemRenda, valorRenda, dataRenda, id_person} = req.body;
            
            const createRendaConstantUseCase = container.resolve(
                CreateRendaConstantUseCase
            )

            const rendaConstant = await createRendaConstantUseCase.execute(
                req.user.uuid,
                {
                origemRenda, 
                valorRenda, 
                dataRenda,                
            })

            return res.status(201).json(rendaConstant)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreateRendaContantController}