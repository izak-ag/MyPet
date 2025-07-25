import "./Cadastro.css";
import { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async () => {
    try {
      await axios.post("http://localhost:3001/cuidadores", {
        nome,
        email,
        senha,
      });
      setMensagem("Cadastro realizado com sucesso!");
    } catch (error) {
      setMensagem(
        "Erro ao cadastrar: " + error?.response?.data?.message || error.message
      );
    }
  };
  return (
    <div className="cadastro-page-background">
      <div className="cadastro-container">
        <h1 className="cadastro-title">Cadastro</h1>

        <form className="cadastro-form">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              required
              onChange={(e) => setEmail(e.target.value)}
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
          </div>

          <div className="user-type-group">
            <label className="user-type-label">Tipo de cadastro</label>
            <div className="radio-options">
              <div className="radio-option">
                <input
                  type="radio"
                  id="tutor"
                  name="userType"
                  value="tutor"
                  defaultChecked
                />
                <label htmlFor="tutor">Tutor</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="prestador"
                  name="userType"
                  value="prestador"
                />
                <label htmlFor="prestador">Prestador</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleCadastro();
            }}
            className="cadastro-button"
          >
            Cadastrar
          </button>

          <p className="login-link">
            Já possui cadastro? <a href="/login">Login</a>
          </p>
          <p>{mensagem}</p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
