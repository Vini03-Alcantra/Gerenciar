import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO";

interface IPersonRepository {
    create(data: ICreatePersonDTO): Promise<void>;
}

export {IPersonRepository}