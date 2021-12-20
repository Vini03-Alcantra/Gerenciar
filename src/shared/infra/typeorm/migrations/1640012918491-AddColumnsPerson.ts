import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsPerson1640012918491 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            "person",
            [
                new TableColumn({
                    name: "birthday",
                    type: "timestamp",
                    isNullable: true
                }),
                new TableColumn({
                    name: "cpf",
                    type: "varchar",
                    isNullable: true
                }),
                new TableColumn({
                    name: "lastLogin",
                    type: "timestamp",
                    isNullable: true
                }),                
            ] 
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("person", "birthday")
    }

}
