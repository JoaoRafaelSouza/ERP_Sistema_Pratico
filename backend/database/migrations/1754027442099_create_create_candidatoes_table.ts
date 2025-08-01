import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'candidatos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Código do candidato
      table
        .integer('usuario_id')
        .unsigned()
        .references('id')
        .inTable('usuarios')
        .onDelete('CASCADE')

      table.string('nome', 100).notNullable()
      table.date('nascimento').notNullable()
      table.string('email', 150).notNullable().unique()
      table.string('telefone', 20).notNullable()
      table.string('cep', 9).notNullable()
      table.string('endereco', 255).notNullable()
      table.json('habilidades').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
