import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import Formacao from './formacao.js'

export default class Candidato extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare usuarioId: number

  @column()
  declare nome: string

  @column.date()
  declare nascimento: DateTime

  @column()
  declare email: string

  @column()
  declare telefone: string

  @column()
  declare cep: string

  @column()
  declare endereco: string

  @column()
  declare habilidades: string[] // armazenado como JSON

  @belongsTo(() => Usuario)
  declare usuario: BelongsTo<typeof Usuario>

  @hasMany(() => Formacao)
  declare formacoes: HasMany<typeof Formacao>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
