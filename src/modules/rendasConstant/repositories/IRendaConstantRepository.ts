import { ICreateRendaConstantDTO } from "../dtos/ICreateRendaConstantDTO";
import { RendaConstant } from "../infra/typeorm/entities/RendaConstant";

interface IRendaConstantRepository {
    create(auth_id: string, data: ICreateRendaConstantDTO): Promise<RendaConstant>;
    read(auth_id: string): Promise<RendaConstant[]>;
    total(auth_id: string): Promise<Number>;
}

export {IRendaConstantRepository}