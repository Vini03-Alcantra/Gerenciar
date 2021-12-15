interface ICreateContaVariableDTO {
    id?: string;
    nomeOrigemConta: string;
    valorConta: number;
    tipoConta: string;
    formaPagamento: string;
    contaPlanejada: boolean;
    idPerson: string;
}

export {ICreateContaVariableDTO}