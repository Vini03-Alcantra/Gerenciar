import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePerson1635265078163 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "person",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "nome_pessoa",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "idade_pessoa",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "email_pessoa",
                        type: "varchar",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("person")
    }

}
