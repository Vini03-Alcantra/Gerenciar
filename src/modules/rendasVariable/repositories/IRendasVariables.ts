import { ICreateRendaVariableDTO } from "../dtos/ICreateRendaVariableDTO";
import { RendaVariavel } from "../infra/typeorm/entities/RendaVariavel";

interface IRendasVariableRepository {
    create(auth_id: string ,data: ICreateRendaVariableDTO): Promise<RendaVariavel>;
    read(auth_id: string): Promise<RendaVariavel[]>;
    total(auth_id: string): Promise<Number>;
}

export {IRendasVariableRepository}