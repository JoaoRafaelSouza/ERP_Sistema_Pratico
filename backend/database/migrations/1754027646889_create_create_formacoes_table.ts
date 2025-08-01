import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'formacoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('candidato_id')
        .unsigned()
        .references('id')
        .inTable('candidatos')
        .onDelete('CASCADE')

      table.string('curso', 100).notNullable()
      table.string('instituicao', 100).notNullable()
      table.date('data_conclusao').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
