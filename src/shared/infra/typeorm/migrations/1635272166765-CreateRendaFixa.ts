import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRendaFixa1635272166765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "renda_variavel",
                columns: [
                    {
                        name: "id", 
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "origem_renda_variavel", 
                        type: "varchar",
                        isNullable: false 
                    },
                    {
                        name: "valor_renda_variavel", 
                        type: "numeric",
                        isNullable: false 
                    },
                    {
                        name: "data_renda_variavel", 
                        type: "timestamp",                        
                    },                    
                    {
                        name: "id_person", 
                        type: "varchar",                        
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKRendaFixaPerson",
                        referencedTableName: "person",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_person"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("renda_variavel")
    }


}
