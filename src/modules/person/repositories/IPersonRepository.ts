import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO";
import { Person } from "../infra/typeorm/entities/Person";

interface IPersonRepository {
    create(data: ICreatePersonDTO): Promise<Person>;
}

export {IPersonRepository}