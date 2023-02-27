interface ICreateContaVariableDTO {
    id?: string;
    nameOriginAccount: string;
    valueAccount: number;
    tipoConta: string;
    dateAccount: string;
    formPayment: string;
    plannedAccount: boolean;    
}

export {ICreateContaVariableDTO}