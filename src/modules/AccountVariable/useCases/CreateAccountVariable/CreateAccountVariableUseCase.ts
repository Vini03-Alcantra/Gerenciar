import {ICreateContaVariableDTO} from "modules/AccountVariable/dtos/ICreateContaVariableDTO"
import { AccountVariable } from "modules/AccountVariable/infra/typeorm/entities/AccountVariable";
import { inject, injectable } from "tsyringe";
import {IAccountsVariableRepository} from "modules/AccountVariable/repositories/IAccountsVariableRepository"


@injectable()
class CreateAccountVariableUseCase {
    constructor(
        @inject("AccountsVariableRepository")
        private accountVariableRepository: IAccountsVariableRepository
    ){}

    async execute({
        nomeOrigemConta,
        valorConta,
        tipoConta,
        dataConta,
        formaPagamento,
        contaPlanejada,
        idPerson
    }: ICreateContaVariableDTO): Promise<AccountVariable>{
        const accountVariable = await this.accountVariableRepository.create({
            nomeOrigemConta,
            valorConta,
            tipoConta,
            dataConta,
            formaPagamento,
            contaPlanejada,
            idPerson
        })

        return accountVariable
    }
}

export {CreateAccountVariableUseCase}