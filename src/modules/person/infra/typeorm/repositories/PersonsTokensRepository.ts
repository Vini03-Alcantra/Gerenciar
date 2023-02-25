import { ICreatePersonTokenDTO } from "@modules/person/dtos/ICreatePersonTokenDTO";
import { IPersonsTokensRepository } from "@modules/person/repositories/IPersonsTokensRepository";
import { getRepository, Repository } from "typeorm";
import { PersonToken } from "../entities/PersonTokens";

class PersonsTokensRepository implements IPersonsTokensRepository {
    private repository: Repository<PersonToken>

    constructor(){
        this.repository = getRepository(PersonToken)
    }

    async create({ 
        expires_date, 
        refresh_token, 
        person_id 
    }: ICreatePersonTokenDTO): Promise<PersonToken> {
        const personToken = this.repository.create({
            expires_date, 
            refresh_token, 
            person_id 
        })

        await this.repository.save(personToken)

        return personToken
    }

    async findByUserIDAndRefreshToken(
        person_id: string, 
        refresh_token: string
    ): Promise<PersonToken> {
        const usersTokens = await this.repository.findOne({
            person_id,
            refresh_token
        })

        return usersTokens
    }

    async deleteById(
        id: string
    ): Promise<void> {
        await this.repository.delete(id)    
    }

    findByRefreshToken(
        refresh_token: string
    ): Promise<PersonToken> {
        const refreshToken = this.repository.findOne({refresh_token})

        return refreshToken
    }

}

export {PersonsTokensRepository}