// app/Controllers/Http/AuthController.ts
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async registrar({ request, response }: HttpContextContract) {
    try {
      const dados = request.only(['nome', 'email', 'senha'])
      const usuario = await Usuario.create(dados)
      return response.created(usuario)
    } catch (error) {
      console.error('Erro ao registrar:', error)
      return response.badRequest({ erro: 'Falha ao registrar usuário.' })
    }
  }

  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const { email, senha } = request.only(['email', 'senha'])
      const usuario = await Usuario.query().where('email', email).first()

      if (!usuario || !(await Hash.verify(usuario.senha, senha))) {
        return response.unauthorized({ erro: 'Credenciais inválidas.' })
      }

      const token = await auth.use('api').generate(usuario)
      return { usuario, token }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      return response.badRequest({ erro: 'Falha ao autenticar.' })
    }
  }
}
