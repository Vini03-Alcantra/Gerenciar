import {IBalanceReposritory} from "@modules/balance/repositories/IBalanceRepository"

class GetBalanceCurrentMonthUseCase {
    constructor(
        private getBalanceRepository: IBalanceReposritory
    ) {}

    async execute(auth_id: string): Promise<Number> {
        const getBalanceCurrentMonth = await this.getBalanceRepository.balanceMomentMonth(auth_id)
        
        return getBalanceCurrentMonth;
    }
}

export {GetBalanceCurrentMonthUseCase}