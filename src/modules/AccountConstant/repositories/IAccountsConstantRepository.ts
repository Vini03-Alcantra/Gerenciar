import { ICreateAccountConstantDTO} from "../dtos/ICreateAccountConstantDTO";


interface IAccountsConstantRepository {
    create(data: ICreateAccountConstantDTO): Promise<void>;
}

export {IAccountsConstantRepository}