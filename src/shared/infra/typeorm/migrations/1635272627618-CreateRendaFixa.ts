import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRendaFixa1635272627618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "renda_fixa",
                columns: [
                    {
                        name: "id", 
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "origem_renda", 
                        type: "varchar",
                        isNullable: false 
                    },
                    {
                        name: "valor_renda", 
                        type: "numeric",
                        isNullable: false 
                    },
                    {
                        name: "data_renda", 
                        type: "timestamp",                        
                    },                    
                    {
                        name: "id_person", 
                        type: "varchar",                        
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKRendaFixaFixaPerson",
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
        await queryRunner.dropTable("renda_fixa")
    }


}
