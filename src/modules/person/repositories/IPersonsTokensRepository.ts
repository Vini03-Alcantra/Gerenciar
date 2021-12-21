import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO";
import { ICreatePersonTokenDTO } from "../dtos/ICreatePersonTokenDTO";
import { Person } from "../infra/typeorm/entities/Person";
import { PersonToken } from "../infra/typeorm/entities/PersonTokens";

interface IPersonsTokensRepository {
    create({
        expires_date,
        refresh_token,
        person_id
    }: ICreatePersonTokenDTO): Promise<PersonToken>;

    findByUserIDAndRefreshToken(
        person_id: string,
        refresh_token: string
    ): Promise<PersonToken>

    deleteById(id: string): Promise<void>;

    findByRefreshToken(refresh_token: string): Promise<PersonToken>
}

export {IPersonsTokensRepository}