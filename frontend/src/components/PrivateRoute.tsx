import { Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: React.ReactElement;
}

export default function PrivateRoute({ children }: Props) {
  const { isAuthenticated, token } = useAuth();

  // Evita renderizar antes de saber se o token existe
  if (token === null) {
    return <div>Carregando...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
