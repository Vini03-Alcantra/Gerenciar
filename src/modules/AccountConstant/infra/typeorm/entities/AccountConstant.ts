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

    @OneToOne(() => Person)
    @JoinColumn()
    person_id: Person;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export {AccountConstant}