import { AccountConstant } from "modules/AccountConstant/infra/typeorm/entities/AccountConstant";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn, TableColumn } from "typeorm";
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

    @Column({name: "birthday"})
    birthday: Date;

    @Column({name: "cpf", unique: true})
    cpf: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {Person}