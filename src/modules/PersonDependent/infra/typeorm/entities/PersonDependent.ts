import { Person } from "../../../../person/infra/typeorm/entities/Person";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("person_dependent")
class PersonDependent {
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column({name: "name_person"})
    namePerson: string;
    
    @Column({name: "email_person"})
    emailPerson: string;

    @Column({name: "birthday"})
    birthday: Date;

    @Column({name: "cpf", unique: true})
    cpf: string;

    @Column({name: "dependent_on_id"})
    dependentOnPerson: string;

    @ManyToOne(() => Person)
    @JoinColumn({name: "dependent_on_id"})
    person: Person;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {PersonDependent}