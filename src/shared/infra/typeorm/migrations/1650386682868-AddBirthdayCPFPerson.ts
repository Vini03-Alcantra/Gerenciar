import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddBirthdayCPFPerson1650386682868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            "person",
            [
                new TableColumn({
                    name: "cpf",
                    type: "varchar"
                }),
                new TableColumn({
                    name: "birthday",
                    type: "varchar"
                })
            ]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
