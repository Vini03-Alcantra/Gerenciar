interface ICreateContaVariableDTO {
    id?: string;
    nomeOrigemConta: string;
    valorConta: number;
    tipoConta: string;
    dataConta: Date;
    formaPagamento: string;
    contaPlanejada: boolean;    
}

export {ICreateContaVariableDTO}