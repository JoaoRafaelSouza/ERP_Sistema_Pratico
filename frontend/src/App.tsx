import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CandidatoPage from "./pages/Candidato";
import FormacaoPage from "./pages/Formacao";
import NotificacaoPage from "./pages/Notificacao";
import SelecaoPage from "./pages/Selecao";
import UsuarioPage from "./pages/Usuario";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />

        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Sub-rotas da dashboard */}
          <Route path="Candidato" element={<CandidatoPage />} />
          <Route path="Formacao" element={<FormacaoPage />} />
          <Route path="Notificacao" element={<NotificacaoPage />} />
          <Route path="Selecao" element={<SelecaoPage />} />
          <Route path="Usuario" element={<UsuarioPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
