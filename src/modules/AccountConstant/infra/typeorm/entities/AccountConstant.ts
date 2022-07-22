import { Person } from "../../../../person/infra/typeorm/entities/Person";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("conta_fixa")
class AccountConstant {
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column({name: "nome_origem_conta"})
    nameOriginAccount: string;

    @Column({name: "valor_conta"})
    valueAccount: number;

    @Column({name: "tipo_conta"})
    tipoConta: String;
    
    @Column({name: "data_conta"})
    dateAccount: Date;

    @Column()
    id_person: string

    @ManyToOne(type => Person, accountConstant => AccountConstant)        
    @JoinColumn({name: "id_person"})
    person: Person;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export {AccountConstant}