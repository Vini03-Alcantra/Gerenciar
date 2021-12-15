import {ICreateContaVariableDTO} from "modules/AccountVariable/dtos/ICreateContaVariableDTO"
import { AccountVariable } from "modules/AccountVariable/infra/typeorm/entities/AccountVariable";
import { inject, injectable } from "tsyringe";
import {IAccountsVariableRepository} from "modules/AccountVariable/repositories/IAccountsVariableRepository"


@injectable()
class CreateAccountVariableUseCase {
    constructor(
        @inject("AccountsConstantRepository")
        private accountVariableRepository: IAccountsVariableRepository
    ){}

    async execute({
        nomeOrigemConta,
        valorConta,
        tipoConta,
        formaPagamento,
        contaPlanejada,
        idPerson
    }: ICreateContaVariableDTO): Promise<AccountVariable>{
        const accountVariable = await this.accountVariableRepository.create({
            nomeOrigemConta,
            valorConta,
            tipoConta,
            formaPagamento,
            contaPlanejada,
            idPerson
        })

        return accountVariable
    }
}

export {CreateAccountVariableUseCase}