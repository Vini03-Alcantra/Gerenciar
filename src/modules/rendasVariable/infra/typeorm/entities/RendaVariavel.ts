import { Person } from "../../../../person/infra/typeorm/entities/Person";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Table } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity({name: "renda_variavel"})
class RendaVariavel {
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column({name: "origem_renda_variavel"})
    origemRendaVariavel: string;

    @Column({name: "valor_renda_variavel"})
    valorRendaVariavel: number;

    @Column({name: "data_renda_variavel"})
    dataRendaVariavel: Date;

    @Column({name: "id_person"})
    idPerson: string;

    @ManyToOne(() => Person)
    @JoinColumn({name: "id_person"})
    person: Person;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {RendaVariavel}