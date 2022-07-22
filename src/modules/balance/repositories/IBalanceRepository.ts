

interface IBalanceReposritory {
    balanceMomentMonth(person_id: string): Promise<Number>;
    balanceMomentYear(person_id: string): Promise<Number>;
}

export {IBalanceReposritory}