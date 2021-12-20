
import { Person } from "../../../../person/infra/typeorm/entities/Person";
import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("renda_fixa")
class RendaConstant {
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column({name: "origem_renda"})
    origemRenda: string;
    
    @Column({name: "valor_renda"})
    valorRenda: number;
    
    @Column({name: "data_renda"})
    dataRenda: Date;
    
    @Column({name: "id_person"})
    id_person: string

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export {RendaConstant}