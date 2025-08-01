import { useState } from 'react'
import { api } from '../services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('/login', { email, senha })
      console.log('Usuário logado:', response.data)
      // salvar token, redirecionar, etc.
    } catch (err: any) {
      setErro(err.response?.data?.erro || 'Erro ao fazer login')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  )
}
