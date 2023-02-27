import { ICreateRendaConstantDTO } from "../dtos/ICreateRendaConstantDTO";
import { SteadyIncome } from "@prisma/client";

interface IRendaConstantRepository {
    create(auth_id: string, data: ICreateRendaConstantDTO): Promise<SteadyIncome>;
    read(auth_id: string): Promise<SteadyIncome[]>;
    total(auth_id: string): Promise<Number>;
}

export {IRendaConstantRepository}