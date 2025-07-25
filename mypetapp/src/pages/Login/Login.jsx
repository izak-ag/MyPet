import "./Login.css";

import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/cuidadores/login", {
        email,
        senha,
      });
      localStorage.setItem("cuidador", JSON.stringify(res.data));
      setMensagem("Login realizado com sucesso!");
    } catch (error) {
      setMensagem(
        "Erro ao logar: " + error?.response?.data?.message || error.message
      );
    }
  };
  return (
    <div className="login-page-background">
      <div className="login-container">
        <h1 className="login-title">Login</h1>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="senha"
              placeholder="********"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <a href="/esqueci-senha" className="forgot-password-link">
              Esqueceu sua senha?
            </a>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="login-button"
          >
            Entrar
          </button>

          <p className="signup-link">
            Não tem cadastro? <a href="/cadastro">Cadastre-se</a>
          </p>
          <p>{mensagem}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
