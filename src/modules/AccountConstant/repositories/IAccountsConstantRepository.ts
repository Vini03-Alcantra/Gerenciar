import { ICreateAccountConstantDTO} from "../dtos/ICreateAccountConstantDTO";
import { AccountConstant } from "../infra/typeorm/entities/AccountConstant";


interface IAccountsConstantRepository {
    create(auth_id: string, data: ICreateAccountConstantDTO): Promise<AccountConstant>;
    read(auth_id: string): Promise<AccountConstant[]>;
    totalValueMonth(auth_id: string): Promise<Number>;
}

export {IAccountsConstantRepository}