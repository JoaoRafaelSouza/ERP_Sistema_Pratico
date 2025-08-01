import Usuario from '../models/usuario.js'
import { hash } from '@adonisjs/hash'

export default class UsuarioService {
  async criarUsuario(dados: { email: string; senha: string }) {
    const existe = await Usuario.findBy('email', dados.email)
    if (existe) {
      throw new Error('E-mail já está em uso')
    }

    const senhaCriptografada = await hash.make(dados.senha)

    const usuario = await Usuario.create({
      email: dados.email,
      senha: senhaCriptografada,
    })

    return {
      id: usuario.id,
      email: usuario.email,
      criadoEm: usuario.createdAt,
    }
  }
}
