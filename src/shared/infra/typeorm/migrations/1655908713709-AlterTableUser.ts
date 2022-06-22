import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTableUser1655908713709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "person",            
            "cpf",            
            new TableColumn({
                name: "cpf",
                type: "varchar",
                isUnique: true
            })
        )        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
