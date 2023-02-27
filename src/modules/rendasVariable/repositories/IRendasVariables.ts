import { ICreateRendaVariableDTO } from "../dtos/ICreateRendaVariableDTO";
import {VariableIncome} from "@prisma/client"
interface IRendasVariableRepository {
    create(auth_id: string, data: ICreateRendaVariableDTO): Promise<VariableIncome>;
    read(auth_id: string): Promise<VariableIncome[]>;
    total(auth_id: string): Promise<Number>;
}

export {IRendasVariableRepository}