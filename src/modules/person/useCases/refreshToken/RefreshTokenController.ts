import { Request, Response } from "express";
import { refreshTokenUseCase } from "./index";

class RefreshTokenController {
    async handle(req: Request, res: Response): Promise<Response>{
        const token =
            req.body.token ||
            req.headers["s-access-token"] ||
            req.query.token

        const refresh_token = await refreshTokenUseCase.execute(token)

        return res.status(200).json(refresh_token)
    }
}

export {RefreshTokenController}