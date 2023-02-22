import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatepersonDependet1676494452636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "person_dependent",
                columns: [
                    {
                        name: "id", 
                        type: "varchar",
                        isPrimary: true                        
                    },
                    {
                        name: "name_person",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "email_person",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    },
                    {                        
                        name: "birthday",
                        type: "varchar"                        
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "dependent_on_id", 
                        type: "varchar",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKPersonDependentOn",
                        referencedTableName: "person",
                        referencedColumnNames: ["id"],
                        columnNames: ["dependent_on_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("person_dependent")
    }

}
