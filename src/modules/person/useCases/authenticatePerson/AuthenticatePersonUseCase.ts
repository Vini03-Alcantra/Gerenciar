import { IPersonRepository } from "@modules/person/repositories/IPersonRepository";
import auth from "../../../../config/auth";
import { IDateProvider } from "@shared/providers/DateProvider/IDateProvider";
import { IPersonsTokensRepository } from "@modules/person/repositories/IPersonsTokensRepository";
import { AppError } from "../../../../errors/AppError";

import { sign } from "jsonwebtoken";

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

class AuthenticatePersonUseCase {
    constructor(
        private personsRepository: IPersonRepository,        
        private dateProvider: IDateProvider,        
        private personsTokensRepository: IPersonsTokensRepository
    ){}
    
    async execute({email, cpf}: IRequest): Promise<IResponse>{
        
        const person = await this.personsRepository.findByEmail(email)
        
        const {
            expires_in_token, 
            secret_refresh_token,
            secret, 
            expires_in_refresh_token,
            expires_refresh_token_days
        } = auth

        if(!person){
            throw new AppError("Email or cpf Incorrect")
        }

        if(email !== person.emailPerson){
            throw new AppError("Email or cpf Incorrect")
        }

        if(cpf !== person.cpf){
            throw new AppError("Email or cpf Incorrect")
        }

        const token = sign({}, secret, {
            subject: person.id,
            expiresIn: expires_in_token
        })

        const refresh_token = sign({email}, secret_refresh_token, {
            subject: person.id,
            expiresIn: expires_in_refresh_token
        })

        const refresh_token_expires_date = this.dateProvider.addDays(
            Number(expires_refresh_token_days)
        )

        await this.personsTokensRepository.create({
            person_id: person.id,
            refresh_token,
            expires_date: refresh_token_expires_date
        })

        const tokenReturn: IResponse =  {
            token,
            person: {
                name: person.namePerson,
                email: person.emailPerson
            },
            refresh_token 
        }

        return tokenReturn
    }
}

export {AuthenticatePersonUseCase}
