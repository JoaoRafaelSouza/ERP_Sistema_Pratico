import { HttpContext } from '@adonisjs/core/http'
import UsuarioService from '#services/usuario_service'
import jwt from 'jsonwebtoken'
import env from '#start/env'

export default class UsuariosController {
  async store(ctx: HttpContext) {
    const usuarioService = new UsuarioService()
    const dados = ctx.request.only(['email', 'senha'])

    const usuario = await usuarioService.criarUsuario(dados)
    return ctx.response.created({ message: 'Usuário criado', usuario })
  }

  async login(ctx: HttpContext) {
    const { email, senha } = ctx.request.only(['email', 'senha'])
    const usuarioService = new UsuarioService()

    const usuario = await usuarioService.autenticarUsuario(email, senha)
    if (!usuario) {
      return ctx.response.unauthorized({ message: 'Credenciais inválidas' })
    }

    const token = jwt.sign({ userId: usuario.id }, env.get('JWT_SECRET'), {
      expiresIn: '1h',
    })

    return ctx.response.ok({ token })
  }

  async logout(ctx: HttpContext) {
    return ctx.response.ok({ message: 'Logout realizado com sucesso' })
  }

  async index(ctx: HttpContext) {
    const usuarioService = new UsuarioService()
    const usuarios = await usuarioService.listarUsuarios()
    return ctx.response.ok(usuarios)
  }
}
