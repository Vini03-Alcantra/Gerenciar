import { ICreateContaVariableDTO } from "../dtos/ICreateContaVariableDTO";
import {AccountVariable} from "@prisma/client"
interface IAccountsVariableRepository {
    create(auth_id: string, data: ICreateContaVariableDTO): Promise<AccountVariable>;
    read(auth_id: string): Promise<AccountVariable[]>;
    totalValueMonth(auth_id: string): Promise<Number>;
}

export {IAccountsVariableRepository}
