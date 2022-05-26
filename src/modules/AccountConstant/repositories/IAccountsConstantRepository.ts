import { ICreateAccountConstantDTO} from "../dtos/ICreateAccountConstantDTO";
import { AccountConstant } from "../infra/typeorm/entities/AccountConstant";


interface IAccountsConstantRepository {
    create(data: ICreateAccountConstantDTO): Promise<AccountConstant>;
    read(): Promise<AccountConstant[]>;
    totalValueMonth(): Promise<Number>;
}

export {IAccountsConstantRepository}