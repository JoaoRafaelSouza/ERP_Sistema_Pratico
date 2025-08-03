import { useState } from "react";
import { loginUsuario } from "../services/login";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    try {
      const response = await loginUsuario(email, senha);
      login(response.data.token); // Isso já salva o token e redireciona
    } catch (err: any) {
      const mensagemErro =
        err.response?.data?.erro ||
        err.response?.data?.message ||
        "Não foi possível fazer login. Verifique suas credenciais.";
      setErro(mensagemErro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              aria-label="Email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Senha</span>
            <input
              type="password"
              aria-label="Senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <button
            type="submit"
            disabled={carregando}
            className={`w-full py-2 rounded-md transition-colors ${
              carregando
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {erro && (
          <p className="mt-4 text-sm text-red-600 text-center">{erro}</p>
        )}
      </div>
    </div>
  );
}
