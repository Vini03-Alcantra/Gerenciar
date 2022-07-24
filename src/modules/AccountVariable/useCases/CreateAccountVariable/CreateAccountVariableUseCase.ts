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

    async execute(
        auth_id: string, 
        {
        nomeOrigemConta,
        valorConta,
        tipoConta,
        dataConta,
        formaPagamento,
        contaPlanejada
    }: ICreateContaVariableDTO): Promise<AccountVariable>{
        const accountVariable = await this.accountVariableRepository.create(
            auth_id,
            {
            nomeOrigemConta,
            valorConta,
            tipoConta,
            dataConta,
            formaPagamento,
            contaPlanejada,
        })

        return accountVariable
    }
}

export {CreateAccountVariableUseCase}