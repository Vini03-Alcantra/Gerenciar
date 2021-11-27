import { Person } from "../../../modules/person/infra/typeorm/entities/Person";

interface ICreateAccountConstantDTO {
    id?: string;
    nameOriginAccount: string;
    valueAccount: number;
    dateAccount?: Date;
    idPerson: string;
}

export {ICreateAccountConstantDTO}