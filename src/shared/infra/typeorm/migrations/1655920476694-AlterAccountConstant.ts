import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterAccountConstant1655920476694 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            "conta_fixa",
            [
                new TableColumn({
                    name: "updateAt",
                    type: "timestamp",
                    default: "now()"
                }),
                new TableColumn({
                    name: "payment_voucher",
                    type: "varchar",
                    isNullable: true
                })
            ]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
