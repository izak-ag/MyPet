import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

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
        <button className="btn button1" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn button2" onClick={() => navigate("/cadastro")}>
          Cadastro
        </button>
      </div>
    </header>
  );
};

export default Header;
