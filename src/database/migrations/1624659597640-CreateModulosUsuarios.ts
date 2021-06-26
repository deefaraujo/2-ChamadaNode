import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateModulosUsuarios1624659597640 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "modulosusuarios",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_do_usuario",
                        type: "varchar"
                    },
                    {
                        name: "id_do_modulo",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                //chave estrangeira! para pegar o id de outra tabela
                foreignKeys: [
                    {   
                        //nome da chave estrangeira
                        name: 'FKUsuario',
                        //qual a tabela que estamos nos referindo
                        referencedTableName: 'usuarios',
                        //qual o registro que queremos pegar
                        referencedColumnNames: ['id'],
                        //qual o registro dessa tabela terá informação do registro que pegamos
                        columnNames: ['id_do_usuario'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {   
                        //nome da chave estrangeira
                        name: 'FKModulo',
                        //qual a tabela que estamos nos referindo
                        referencedTableName: 'modulos',
                        //qual o registro que queremos pegar
                        referencedColumnNames: ['id'],
                        //qual o registro dessa tabela terá informação do registro que pegamos
                        columnNames: ['id_do_modulo'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("modulosusuarios")
    }

}
