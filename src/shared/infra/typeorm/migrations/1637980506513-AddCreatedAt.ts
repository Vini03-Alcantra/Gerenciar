import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCreatedAt1637980506513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "person",
            new TableColumn({
                name: "createdAt",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("person", "createdAt")
    }

}
