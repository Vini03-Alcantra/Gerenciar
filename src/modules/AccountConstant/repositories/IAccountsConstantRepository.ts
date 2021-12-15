import { ICreateAccountConstantDTO} from "../dtos/ICreateAccountConstantDTO";
import { AccountConstant } from "../infra/typeorm/entities/AccountConstant";


interface IAccountsConstantRepository {
    create(data: ICreateAccountConstantDTO): Promise<AccountConstant>;
}

export {IAccountsConstantRepository}