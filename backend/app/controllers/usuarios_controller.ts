import { HttpContext } from '@adonisjs/core/http'
import UsuarioService from '#services/usuario_service'

export default class UsuariosController {
  async store(ctx: HttpContext) {
    const usuarioService = new UsuarioService()
    const dados = ctx.request.only(['email', 'senha'])
    await usuarioService.criarUsuario(dados)
    return ctx.response.created({ message: 'Usuário criado' })
  }

  async login(_ctx: HttpContext) {
    // lógica de login
  }

  async logout(_ctx: HttpContext) {
    // lógica de logout
  }

  async index(_ctx: HttpContext) {
    // Teste da index
  }
}
