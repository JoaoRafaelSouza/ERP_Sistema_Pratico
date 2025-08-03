import { api } from "./api";

export const loginUsuario = (email: string, senha: string) => {
  return api.post("/login", { email, senha });
};
