import { ICreateAccountConstantDTO } from "modules/AccountConstant/dtos/ICreateAccountConstantDTO";
import { IAccountsConstantRepository } from "modules/AccountConstant/repositories/IAccountsConstantRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAccountConstantUseCase {
    constructor(
        @inject("AccountsConstantRepository")
        private accountsConstantRepository: IAccountsConstantRepository
    ){}

    async execute ({nameOriginAccount, valueAccount, idPerson}: ICreateAccountConstantDTO): Promise<void>{
        const accountConstant = await this.accountsConstantRepository.create({
            nameOriginAccount, 
            valueAccount, 
            idPerson
        })

        console.log(accountConstant)
    }
}

export {CreateAccountConstantUseCase}