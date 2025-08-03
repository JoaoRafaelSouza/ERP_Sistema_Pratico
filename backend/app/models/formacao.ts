import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Candidato from './candidato.js'
import { AutoAccessors } from '../DAOS/auto_accessors.js'

@AutoAccessors
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

  // Métodos
  getId() {
    return this.id
  }

  getCandidatoId() {
    return this.candidatoId
  }

  setCandidatoId(id: number) {
    this.candidatoId = id
  }

  getCurso() {
    return this.curso
  }

  setCurso(curso: string) {
    this.curso = curso
  }

  getInstituicao() {
    return this.instituicao
  }

  setInstituicao(instituicao: string) {
    this.instituicao = instituicao
  }

  getDataConclusao() {
    return this.dataConclusao
  }

  setDataConclusao(data: DateTime) {
    this.dataConclusao = data
  }

  getCandidato() {
    return this.candidato
  }

  setCandidato(candidato: Candidato) {
    this.candidato = candidato as BelongsTo<typeof Candidato>
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
