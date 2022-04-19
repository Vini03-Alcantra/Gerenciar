import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreatedAtRendaFixa1650384937498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "renda_fixa",
            new TableColumn({
                name: "createdAt",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
