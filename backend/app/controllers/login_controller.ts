import { HttpContext } from '@adonisjs/core/http'
import Login from '../DAOS/login_dao.js'
import jwt from 'jsonwebtoken'
import env from '#start/env'

export default class LoginController {
  async store(ctx: HttpContext) {
    const LoginDao = new Login()
    const dados = ctx.request.only(['email', 'senha'])

    const usuario = await LoginDao.criarUsuario(dados)
    return ctx.response.created({ message: 'Usuário criado', usuario })
  }

  async login(ctx: HttpContext) {
    const { email, senha } = ctx.request.only(['email', 'senha'])
    const LoginDao = new Login()

    const usuario = await LoginDao.autenticarUsuario(email, senha)
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
    const LoginDao = new Login()
    const usuarios = await LoginDao.listarUsuarios()
    return ctx.response.ok(usuarios)
  }
}
