import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticatePersonUseCase } from "./AuthenticatePersonUseCase";

class AuthenticatePersonController {
    async handle(req: Request, res: Response): Promise<Response>{        
        const {cpf, email} = req.body;
        
        try {
            const authenticatePersonUseCase = container.resolve(
                AuthenticatePersonUseCase
            )

            const token = await authenticatePersonUseCase.execute({
                cpf,
                email
            })

            return res.status(201).json(token)
        } catch (err) {
            return res.status(500).json({err})
        }
    }
}

export {AuthenticatePersonController}