import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO";
import { Person } from "../infra/typeorm/entities/Person";

interface IPersonRepository {
    create(data: ICreatePersonDTO): Promise<Person>;
    findByEmail(email: string): Promise<Person>;
    findById(id: string): Promise<Person>;
    find(): Promise<Person[]>;
}

export {IPersonRepository}