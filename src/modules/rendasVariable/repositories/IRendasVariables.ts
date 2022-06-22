import { ICreateRendaVariableDTO } from "../dtos/ICreateRendaVariableDTO";
import { RendaVariavel } from "../infra/typeorm/entities/RendaVariavel";

interface IRendasVariableRepository {
    create(data: ICreateRendaVariableDTO): Promise<RendaVariavel>;
    read(): Promise<RendaVariavel[]>;
    total(): Promise<Number>;
}

export {IRendasVariableRepository}