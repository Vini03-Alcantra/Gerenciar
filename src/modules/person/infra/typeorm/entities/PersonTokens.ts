import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Person } from "./Person";

@Entity("persons_token")
class PersonToken{
    @PrimaryColumn()
    id: string;

    @Column()
    refresh_token: string;

    @Column()
    person_id: string;

    @ManyToOne(() => Person)
    @JoinColumn({name: "person_id"})
    person: Person;

    @Column()
    expires_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}


export {PersonToken}