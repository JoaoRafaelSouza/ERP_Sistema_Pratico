import { useAuth } from "../hooks/useAuth";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/dashboard/candidato"
            className="text-blue-600 hover:underline"
          >
            👤 Candidato
          </Link>
          <Link
            to="/dashboard/formacao"
            className="text-blue-600 hover:underline"
          >
            🎓 Formação
          </Link>
          <Link
            to="/dashboard/notificacao"
            className="text-blue-600 hover:underline"
          >
            🔔 Notificação
          </Link>
          <Link
            to="/dashboard/selecao"
            className="text-blue-600 hover:underline"
          >
            ✅ Seleção
          </Link>
          <Link
            to="/dashboard/usuario"
            className="text-blue-600 hover:underline"
          >
            🧑‍💼 Usuário
          </Link>
        </nav>

        <button
          onClick={logout}
          className="mt-10 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Sair
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Bem-vindo ao Dashboard
        </h1>
        <p className="text-gray-600 mb-4">Você está logado com sucesso!</p>

        {/* Renderiza a página selecionada */}
        <Outlet />
      </main>
    </div>
  );
}
