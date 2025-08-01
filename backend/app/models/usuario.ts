import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column({ serializeAs: null }) // Não expõe a senha em respostas JSON
  declare senha: string

  @column()
  declare tipo: 'gestor' | 'candidato'

  @column()
  declare ativo: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
