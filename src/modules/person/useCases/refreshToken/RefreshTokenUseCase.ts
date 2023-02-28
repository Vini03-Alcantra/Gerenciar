import auth from "config/auth";
import { AppError } from "errors/AppError";
import { IPersonsTokensRepository } from "@modules/person/repositories/IPersonsTokensRepository";
import { IDateProvider } from "@shared/providers/DateProvider/IDateProvider";

import { sign, verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
    email: string;
}

class RefreshTokenUseCase {
    constructor(
        private personsTokensRepository: IPersonsTokensRepository,
        private dateProvider: IDateProvider
    ){}

    async execute(token: string): Promise<String>{
        const {email, sub} = verify(token, auth.secret_refresh_token) as IPayload;

        const person_id = sub;

        const personToken = await this.personsTokensRepository.findByUserIDAndRefreshToken(
            person_id, 
            token
        )

        if(!personToken){
            throw new AppError("Refresh Token doesn't exists")
        }

        await this.personsTokensRepository.deleteById(personToken.id)

        const refresh_token = sign({email}, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token
        })

        const days_expire_date = auth.expires_refresh_token_days;
        const expires_date = this.dateProvider.addDays(
            parseInt(days_expire_date)
        )

        await this.personsTokensRepository.create({
            expires_date,
            refresh_token,
            person_id
        })

        return refresh_token
    }
}

export {RefreshTokenUseCase}