import "./style.css";

const Header = () => {
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
        <button className="btn button1">Login</button>
        <button className="btn button2">Cadastro</button>
      </div>
    </header>
  );
};

export default Header;
