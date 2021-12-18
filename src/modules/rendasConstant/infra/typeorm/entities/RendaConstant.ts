
import { Person } from "../../../../person/infra/typeorm/entities/Person";
import { Column, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

class RendaConstant {
    @PrimaryColumn({generated: true})
    id: string;

    @Column({name: "origem_renda"})
    origemRenda: string;
    
    @Column({name: "valor_renda"})
    valorRenda: number;
    
    @Column({name: "data_renda"})
    dataRenda: Date;
    
    @ManyToOne(type => Person, rendaConstant => RendaConstant)
    @Column()
    id_person: string

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export {RendaConstant}