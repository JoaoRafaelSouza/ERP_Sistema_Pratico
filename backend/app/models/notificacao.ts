import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import { AutoAccessors } from '../../DAOS/auto_accessors.js'

@AutoAccessors
export default class Notificacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare usuarioId: number

  @column()
  declare mensagem: string

  @column()
  declare visualizado: boolean

  @belongsTo(() => Usuario)
  declare usuario: BelongsTo<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Métodos get/set
  getId() {
    return this.id
  }

  getUsuarioId() {
    return this.usuarioId
  }

  setUsuarioId(id: number) {
    this.usuarioId = id
  }

  getMensagem() {
    return this.mensagem
  }

  setMensagem(mensagem: string) {
    this.mensagem = mensagem
  }

  isVisualizado() {
    return this.visualizado
  }

  setVisualizado(status: boolean) {
    this.visualizado = status
  }

  getUsuario() {
    return this.usuario
  }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario as BelongsTo<typeof Usuario>
  }

  getCreatedAt() {
    return this.createdAt
  }

  setCreatedAt(data: DateTime) {
    this.createdAt = data
  }

  getUpdatedAt() {
    return this.updatedAt
  }

  setUpdatedAt(data: DateTime) {
    this.updatedAt = data
  }
}
