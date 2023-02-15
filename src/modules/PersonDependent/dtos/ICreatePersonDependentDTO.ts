interface ICreatePersonDependentDTO {
    id?: string;
    namePerson: string;    
    emailPerson: string;      
    birthday: Date;
    cpf: string;  
    dependentOnId: string
}

export {ICreatePersonDependentDTO}