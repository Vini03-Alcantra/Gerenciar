import { ICreateRendaConstantDTO } from "../dtos/ICreateRendaConstantDTO";
import { RendaConstant } from "../infra/typeorm/entities/RendaConstant";

interface IRendaConstantRepository {
    create(data: ICreateRendaConstantDTO): Promise<RendaConstant>
}

export {IRendaConstantRepository}