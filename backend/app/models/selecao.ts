import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Candidato from './candidato.js'
import Usuario from './usuario.js'
import { AutoAccessors } from '../DAOS/auto_accessors.js'

@AutoAccessors
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

  // Métodos get/set
  getId() {
    return this.id
  }

  getCandidatoId() {
    return this.candidatoId
  }

  setCandidatoId(id: number) {
    this.candidatoId = id
  }

  getGestorId() {
    return this.gestorId
  }

  setGestorId(id: number) {
    this.gestorId = id
  }

  getDataSelecao() {
    return this.dataSelecao
  }

  setDataSelecao(data: DateTime) {
    this.dataSelecao = data
  }

  getDataEntrevista() {
    return this.dataEntrevista
  }

  setDataEntrevista(data: DateTime) {
    this.dataEntrevista = data
  }

  getCandidato() {
    return this.candidato
  }

  setCandidato(candidato: Candidato) {
    this.candidato = candidato as BelongsTo<typeof Candidato>
  }

  getGestor() {
    return this.gestor
  }

  setGestor(gestor: Usuario) {
    this.gestor = gestor as BelongsTo<typeof Usuario>
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
