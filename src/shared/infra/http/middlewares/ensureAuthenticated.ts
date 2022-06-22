import { PersonsTokensRepository } from "../../../../modules/person/infra/typeorm/repositories/PersonsTokensRepository";
import auth from "../../../../config/auth";
import { AppError } from "../../../../errors/AppError";
import { Response, Request, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated (
    req: Request,
    res: Response,
    next: NextFunction
){
    const authHeader = req.headers.authorization

    const personTokensRepository = new PersonsTokensRepository()

    if(!authHeader){
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    console.log(token)

    try {

        console.log(token, auth.secret_refresh_token)
        const {sub: person_id} = verify(
            token,
            auth.secret_refresh_token
        ) as IPayload

        const person = await personTokensRepository.findByUserIDAndRefreshToken(
            person_id,
            token
        )

        if(!person){
            throw new AppError("User doesn't exists", 401)
        }

        req.user = {
            uuid: person_id
        }

        next()
    } catch (error) {
        throw new AppError("Invalid token", 401)
    }
}