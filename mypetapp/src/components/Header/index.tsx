import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

  const data = localStorage.getItem("cuidador");

  const cuidador = data ? JSON.parse(data) : null;
  const isLogged = !!cuidador;

  return (
    <header className="header">
      <h1 className="title">
        <a href="/">My Pet</a>
      </h1>
      <nav>
        <a href="/">Início</a>
        <a href="/#aboutUs">Sobre Nós</a>
        <a href="/contact">Contatar</a>
      </nav>

      <div className="auth">
        {isLogged ? (
          <p className="userName">Olá, {cuidador.nome}</p>
        ) : (
          <>
            <button className="btn button1" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="btn button2"
              onClick={() => navigate("/cadastro")}
            >
              Cadastro
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
