import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { AutoAccessors } from '../DAOS/auto_accessors.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

@AutoAccessors
export default class Usuario extends BaseModel {
  // static accessTokens = true

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare senha: string

  @column()
  declare tipo: 'gestor' | 'candidato'

  @column()
  declare ativo: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Abaixo temos os métodos
  getId() {
    return this.id
  }
  setId(id: number) {
    this.id = id
  }

  getNome() {
    return this.nome
  }
  setNome(nome: string) {
    this.nome = nome
  }

  getEmail() {
    return this.email
  }
  setEmail(email: string) {
    this.email = email
  }

  getSenha() {
    return this.senha
  }
  setSenha(senha: string) {
    this.senha = senha
  }

  getTipo() {
    return this.tipo
  }
  setTipo(tipo: 'gestor' | 'candidato') {
    this.tipo = tipo
  }

  getAtivo() {
    return this.ativo
  }
  setAtivo(ativo: boolean) {
    this.ativo = ativo
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

  static accessTokens = DbAccessTokensProvider.forModel(Usuario)
}
