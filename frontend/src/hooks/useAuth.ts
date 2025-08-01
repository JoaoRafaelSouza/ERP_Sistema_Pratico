import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function useAuth() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    // Atualiza o estado com o token armazenado
    if (storedToken && storedToken !== "undefined") {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    // Redireciona apenas se o token estiver presente
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  const isAuthenticated = !!token;

  return { token, login, logout, isAuthenticated };
}
