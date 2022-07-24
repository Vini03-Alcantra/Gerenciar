import { inject, injectable } from "tsyringe";

import {IBalanceReposritory} from "@modules/balance/repositories/IBalanceRepository"

@injectable()
class GetBalanceCurrentMonthUseCase {
    constructor(
        @inject("BalanceRepository")
        private getBalanceRepository: IBalanceReposritory
    ) {}

    async execute(auth_id: string): Promise<Number> {
        const getBalanceCurrentMonth = await this.getBalanceRepository.balanceMomentMonth(auth_id)
        
        return getBalanceCurrentMonth;
    }
}

export {GetBalanceCurrentMonthUseCase}