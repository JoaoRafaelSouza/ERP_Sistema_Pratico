import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Candidato from './candidato.js'
import Usuario from './usuario.js'

export default class Selecao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare candidatoId: number

  @column()
  declare gestorId: number

  @column.dateTime()
  declare dataSelecao: DateTime

  @column.dateTime()
  declare dataEntrevista: DateTime

  @belongsTo(() => Candidato)
  declare candidato: BelongsTo<typeof Candidato>

  @belongsTo(() => Usuario)
  declare gestor: BelongsTo<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
