import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterNameForeignKeyAccountConstant1638028108593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "conta_fixa" RENAME COLUMN personId TO id_person`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
