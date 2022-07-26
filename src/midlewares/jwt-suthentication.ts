import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken'

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    const authorizationHeader = req.headers['authorization']

    if(!authorizationHeader){
        throw new Error("Credentials don't send")
    }               

    try {
        const [authenticationType, token] = authorizationHeader.split(' ')

        if(authenticationType !== 'Bearer' || !token){
            throw new Error("Invalid Authenticate")
        }

        try {
            const tokenPayload = JWT.verify(token, `${process.env.secret_auth_key}`)

            if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
                throw new Error("Invalid token")
            }
            
            req.user = {
                uuid: tokenPayload.sub
            }
            
            next()
        } catch (err) {
            console.error(err)
            throw new Error("Indisponibilid Operation")
        }
    } catch (error) {
        next(error)
    }
}

export {jwtAuthenticationMiddleware}