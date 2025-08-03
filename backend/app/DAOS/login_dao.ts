import Usuario from '../models/usuario.js'
import Hash from '@adonisjs/core/services/hash'

export default class LoginDao {
  async criarUsuario({ email, senha }: { email: string; senha: string }) {
    const emailNormalizado = email.trim().toLowerCase()
    const existe = await Usuario.findBy('email', emailNormalizado)
    if (existe) throw new Error('E-mail já está em uso')

    const senhaCriptografada = await Hash.use('argon').make(senha)

    const usuario = await Usuario.create({
      email: emailNormalizado,
      senha: senhaCriptografada,
    })

    return {
      id: usuario.id,
      email: usuario.email,
      criadoEm: usuario.createdAt,
    }
  }

  async autenticarUsuario(email: string, senha: string) {
    const usuario = await Usuario.findBy('email', email.trim().toLowerCase())
    if (!usuario) return null

    const senhaValida = await Hash.use('argon').verify(usuario.senha, senha)
    if (!senhaValida) return null

    return usuario
  }

  async listarUsuarios() {
    const usuarios = await Usuario.all()
    return usuarios.map((u) => ({
      id: u.id,
      email: u.email,
      criadoEm: u.createdAt,
    }))
  }
}
