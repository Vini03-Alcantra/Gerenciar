import { ICreatePersonDTO } from "../dtos/ICreatePersonDTO";
import { Person } from "@prisma/client";

interface IPersonRepository {
    create(data: ICreatePersonDTO): Promise<Person>;
    findByEmail(email: string): Promise<Person>;
    findById(id: string): Promise<Person>;
    find(): Promise<Person[]>;
}

export {IPersonRepository}