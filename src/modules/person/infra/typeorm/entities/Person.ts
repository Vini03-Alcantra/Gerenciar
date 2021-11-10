import { Column, CreateDateColumn, Entity, PrimaryColumn, TableColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("person")
class Person {
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column({name: "nome_pessoa"})
    nomePerson: string;
    
    @Column({name: "idade_pessoa"})
    idadePerson: number;
    
    @Column({name: "email_pessoa"})
    emailPerson: string;

    @CreateDateColumn({name: "date_start"})
    dateStart: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {Person}