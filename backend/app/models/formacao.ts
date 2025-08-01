import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Candidato from './candidato.js'

export default class Formacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare candidatoId: number

  @column()
  declare curso: string

  @column()
  declare instituicao: string

  @column.date()
  declare dataConclusao: DateTime

  @belongsTo(() => Candidato)
  declare candidato: BelongsTo<typeof Candidato>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
