import { Person } from "../../../../person/infra/typeorm/entities/Person";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("conta_fixa")
class AccountConstant {
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column({name: "nome_origem_conta"})
    nameOriginAccount: string;

    @Column({name: "valor_conta"})
    valueAccount: number;

    @Column({name: "data_conta"})
    dateAccount: Date;

    @OneToOne(type => Person, accountConstant => AccountConstant)        
    @Column()
    id_person: string

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export {AccountConstant}