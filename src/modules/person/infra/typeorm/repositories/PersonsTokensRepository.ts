import { ICreatePersonTokenDTO } from "@modules/person/dtos/ICreatePersonTokenDTO";
import { IPersonsTokensRepository } from "@modules/person/repositories/IPersonsTokensRepository";
import { PrismaClient, PersonToken } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

const prisma = new PrismaClient()

class PersonsTokensRepository implements IPersonsTokensRepository {
    async create({ 
        expires_date, 
        refresh_token, 
        person_id 
    }: ICreatePersonTokenDTO): Promise<PersonToken> {
        const id = uuidV4()
        const personToken = await prisma.personToken.create({
            data: {
                id,
                expires_date,
                refresh_token,
                fk_id_person: person_id
            }
        })


        return personToken
    }

    async findByUserIDAndRefreshToken(
        person_id: string, 
        refresh_token: string
    ): Promise<PersonToken> {
        const usersTokens = await prisma.personToken.findFirst({
            where: {
                fk_id_person: person_id                ,
                refresh_token
            }
            
        })

        return usersTokens
    }

    async deleteById(
        id: string
    ): Promise<void> {
        await prisma.personToken.delete({
            where: {
                id
            }
        }) 
    }

    async findByRefreshToken(
        refresh_token: string
    ): Promise<PersonToken> {
        const refreshToken = await prisma.personToken.findFirst({
            where: {
                refresh_token
            }
        })         

        return refreshToken
    }

}

export {PersonsTokensRepository}