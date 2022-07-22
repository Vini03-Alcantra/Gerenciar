import { ICreateAccountConstantDTO } from "modules/AccountConstant/dtos/ICreateAccountConstantDTO";
import { AccountConstant } from "modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAccountConstantUseCase {
    constructor(
        @inject("AccountsConstantRepository")
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute ({nameOriginAccount, valueAccount, tipoConta, idPerson}: ICreateAccountConstantDTO): Promise<AccountConstant>{
        const accountConstant = await this.accountsConstantRepository.create({
            nameOriginAccount, 
            tipoConta,
            valueAccount, 
            idPerson
        })

        return accountConstant
    }
}

export {CreateAccountConstantUseCase}