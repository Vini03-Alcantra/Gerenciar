import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ALterUserCpfUnique1655915071525 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "person",
            "cpf",
            new TableColumn({
                name: "cpf",
                type: "varchar",
                isUnique: true,
                isNullable: false
            })
        )    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
