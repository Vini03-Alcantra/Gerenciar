import { ICreatePersonDependentDTO } from "../dtos/ICreatePersonDependentDTO";
import { PersonDependent } from "../infra/typeorm/entitties/PersonDependent";

interface IPersonDependentRepository {
    create(data: ICreatePersonDependentDTO): Promise<PersonDependent>;
    findByEmail(email: string): Promise<PersonDependent>;
    findByCPF(cpf: string): Promise<PersonDependent>;
    findById(id: string): Promise<PersonDependent>;
    find(): Promise<PersonDependent[]>;
}

export {IPersonDependentRepository}