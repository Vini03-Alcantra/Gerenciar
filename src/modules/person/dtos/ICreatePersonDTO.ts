interface ICreatePersonDTO {
    nomePerson: string;
    idadePerson: number;
    emailPerson: string;      
    birthday: Date;
    cpf: string;  
    id?: string;
}

export {ICreatePersonDTO}