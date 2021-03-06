import { ICreateContaVariableDTO } from "../dtos/ICreateContaVariableDTO";
import { AccountVariable } from "../infra/typeorm/entities/AccountVariable";

interface IAccountsVariableRepository {
    create(data: ICreateContaVariableDTO): Promise<AccountVariable>;
    read(): Promise<AccountVariable[]>;
    totalValueMonth(): Promise<Number>;
}

export {IAccountsVariableRepository}
