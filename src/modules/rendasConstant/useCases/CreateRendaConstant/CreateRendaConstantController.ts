import { Response, Request } from "express";
import { createRendaConstantUseCase } from "./index";


class CreateRendaContantController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { incomeOrigin, valueIncome, dateIncome } = req.body;
            const rendaConstant = await createRendaConstantUseCase.execute(
                {
                    fk_id_person: req.user.uuid,
                    incomeOrigin, 
                    valueIncome, 
                    dateIncome                
            })

            return res.status(201).json(rendaConstant)
        } catch (err) {
            return res.status(500).json(err.message)
        }
    }
}

export {CreateRendaContantController}