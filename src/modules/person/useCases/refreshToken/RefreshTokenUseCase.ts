import auth from "config/auth";
import { AppError } from "errors/AppError";
import { IPersonsTokensRepository } from "@modules/person/repositories/IPersonsTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IPersonRepository } from "@modules/person/repositories/IPersonRepository";

interface IPayload {
    sub: string;
    email: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("PersonsTokensRepository")
        private personsTokensRepository: IPersonsTokensRepository,
        @inject("DayjsDateProvider")
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

        const expires_date = this.dateProvider.addDays(
            auth.expires_refresh_token_days
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