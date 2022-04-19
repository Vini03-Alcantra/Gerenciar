
import { Person } from "../../../../person/infra/typeorm/entities/Person";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
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
    
    @Column()
    id_person: string;

    @ManyToOne(() => Person)
    @JoinColumn({name: "id_person"})
    person: Person

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export {RendaConstant}