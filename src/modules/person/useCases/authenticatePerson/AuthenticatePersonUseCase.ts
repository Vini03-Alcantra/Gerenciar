import { IPersonRepository } from "@modules/person/repositories/IPersonRepository";
import auth from "config/auth";

import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IPersonsTokensRepository } from "@modules/person/repositories/IPersonsTokensRepository";

interface IRequest {
    email: string;
    cpf: string;
}

interface IResponse {
    person: {
        name: string;
        email: string;
    },
    token: string;
    refresh_token: string;
}

@injectable()
class AuthenticatePersonUseCase {
    constructor(
        @inject("PersonsRepository")
        private personsRepository: IPersonRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("PersonsTokensRepository")
        private personsTokensRepository: IPersonsTokensRepository
    ){}

    async execute({email, cpf}: IRequest): Promise<IResponse>{
        const user = await this.personsRepository.findByEmail(email)
        const {
            expires_in_token, 
            secret_refresh_token,
            secret, 
            expires_in_refresh_token,
            expires_refresh_token_days
        } = auth
        
        if(!user){
            throw new Error("Email or password Incorrect")
        }

        if(email == user.emailPerson){
            throw new Error("Email or password Incorrect")
        }

        if(cpf == user.cpf){
            throw new Error("Email or password Incorrect")
        }

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn: expires_in_token
        })

        const refresh_token = sign({email}, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token
        })

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days
        )

        await this.personsTokensRepository.create({
            person_id: user.id,
            refresh_token,
            expires_date: refresh_token_expires_date
        })

        const tokenReturn: IResponse =  {
            token,
            person: {
                name: user.nomePerson,
                email: user.emailPerson
            },
            refresh_token 
        }

        return tokenReturn
    }
}

export {AuthenticatePersonUseCase}
