import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import Formacao from './formacao.js'
import { AutoAccessors } from '../../DAOS/auto_accessors.js'

@AutoAccessors
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

  // Métodos
  getId() {
    return this.id
  }

  getUsuarioId() {
    return this.usuarioId
  }

  setUsuarioId(usuarioId: number) {
    this.usuarioId = usuarioId
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

  getTelefone() {
    return this.telefone
  }

  setTelefone(telefone: string) {
    this.telefone = telefone
  }

  getEndereco() {
    return this.endereco
  }

  setEndereco(endereco: string) {
    this.endereco = endereco
  }

  getHabilidades() {
    return this.habilidades
  }

  setHabilidades(habilidades: string[]) {
    this.habilidades = habilidades
  }

  getUsuario() {
    return this.usuario
  }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario as BelongsTo<typeof Usuario>
  }

  getFormacoes() {
    return this.formacoes
  }

  setFormacoes(formacoes: Formacao[]) {
    this.formacoes = formacoes as HasMany<typeof Formacao>
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
