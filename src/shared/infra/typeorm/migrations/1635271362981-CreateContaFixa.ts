import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContaFixa1635271362981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "conta_fixa",
                columns: [
                    {
                        name: "id", 
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "nome_origem_conta", 
                        type: "varchar",
                        isNullable: false 
                    },
                    {
                        name: "valor_conta", 
                        type: "numeric",
                        isNullable: false 
                    },
                    {
                        name: "data_conta", 
                        type: "timestamp",
                        isNullable: false 
                    },
                    {
                        name: "id_person", 
                        type: "varchar",                        
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKContaFixaPerson",
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
    }

}
