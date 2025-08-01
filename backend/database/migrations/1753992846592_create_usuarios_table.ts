import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.string('email', 150).notNullable().unique()
      table.string('senha', 180).notNullable()
      table.enum('tipo', ['gestor', 'candidato']).notNullable()
      table.boolean('ativo').defaultTo(false) // Para ativação via e-mail
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
