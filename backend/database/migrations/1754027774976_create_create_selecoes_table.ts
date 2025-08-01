import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'selecoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('candidato_id')
        .unsigned()
        .references('id')
        .inTable('candidatos')
        .onDelete('CASCADE')

      table
        .integer('gestor_id')
        .unsigned()
        .references('id')
        .inTable('usuarios')
        .onDelete('SET NULL')

      table.timestamp('data_selecao', { useTz: true }).notNullable()
      table.timestamp('data_entrevista', { useTz: true }).notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
