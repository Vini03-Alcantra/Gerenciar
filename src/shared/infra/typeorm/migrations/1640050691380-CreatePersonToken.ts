import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonToken1640050691380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "persons_token",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "refresh_token",
                        type: "varchar"
                    },
                    {
                        name: "person_id",
                        type: "varchar"
                    },
                    {
                        name: "expires_date",
                        type: "timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKPersonToken",
                        referencedTableName: "person",
                        referencedColumnNames: ["id"],
                        columnNames: ["person_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            }) 
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("persons_token")
    }

}
