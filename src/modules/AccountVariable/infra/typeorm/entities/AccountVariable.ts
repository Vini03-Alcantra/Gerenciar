import { Person } from "../../../../person/infra/typeorm/entities/Person";

import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("conta_variavel")
class AccountVariable {
    @PrimaryColumn({generated: "uuid"})
    id: string;

    @Column({name: "nome_origem_conta"})
    nomeOrigemConta: string;

    @Column({name: "valor_conta"})
    valorConta: number;

    @Column({name: "tipo_conta"})
    tipoConta: string;

    @Column({name: "data_conta"})
    dataConta: Date;

    @Column({name: "forma_pagamento"})
    formaPagamento: string;

    @Column({name: "conta_planejada"})
    contaPlanejada: boolean;

    @OneToOne(type => Person, accountVariable => AccountVariable)
    @Column({name: "id_person"})
    idPerson: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {AccountVariable}