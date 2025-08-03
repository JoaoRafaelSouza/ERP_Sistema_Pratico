import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import { AutoAccessors } from '../DAOS/auto_accessors.js'

@AutoAccessors
export default class TokenAtivacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare usuarioId: number

  @column()
  declare token: string

  @column.dateTime()
  declare expiraEm: DateTime

  @column()
  declare usado: boolean

  @belongsTo(() => Usuario)
  declare usuario: BelongsTo<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
