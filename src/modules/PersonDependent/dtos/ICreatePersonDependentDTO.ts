interface ICreatePersonDependentDTO {
    id?: string;
    namePerson: string;    
    emailPerson: string;      
    birthday: string;
    cpf: string;  
    dependentOnId: string
}

export {ICreatePersonDependentDTO}