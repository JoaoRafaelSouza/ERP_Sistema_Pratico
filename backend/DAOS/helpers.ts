import type { Database } from '@adonisjs/lucid/database'

export default class Helpers {
  constructor(protected db: Database) {}
  async cadastrar<T>(tabela: string, dados: Partial<T>): Promise<number> {
    try {
      const ids = await this.db.table(tabela).insert(dados)
      return ids[0] as number
    } catch (error) {
      console.error(`Erro ao cadastrar em ${tabela}:`, error)
      throw new Error('Falha ao cadastrar registro.')
    }
  }

  async alterar<T>(tabela: string, where: Partial<T>, data: Partial<T>): Promise<number> {
    try {
      const alterados = await this.db.from(tabela).where(where).update(data)
      const id = alterados[0] as number
      return id
    } catch (error) {
      console.error(`Erro ao alterar em ${tabela}:`, error)
      throw new Error('Falha ao alterar registro.')
    }
  }

  async listar<T>(tabela: string, where?: Partial<T>): Promise<T[]> {
    try {
      const query = this.db.from(tabela)
      if (where) query.where(where)
      return await query.select('*')
    } catch (error) {
      console.error(`Erro ao listar registros de ${tabela}:`, error)
      throw new Error('Falha ao listar registros.')
    }
  }

  async listarUm<T>(tabela: string, where: Partial<T>): Promise<T | null> {
    try {
      const result = await this.db.from(tabela).where(where).first()
      return result ?? null
    } catch (error) {
      console.error(`Erro ao buscar registro único em ${tabela}:`, error)
      throw new Error('Falha ao buscar registro.')
    }
  }

  async excluir<T>(tabela: string, where: Partial<T>): Promise<number> {
    try {
      const deletados = await this.db.from(tabela).where(where).delete()
      const id = deletados[0] as number
      return id
    } catch (error) {
      console.error(`Erro ao excluir de ${tabela}:`, error)
      throw new Error('Falha ao excluir registro.')
    }
  }
}
