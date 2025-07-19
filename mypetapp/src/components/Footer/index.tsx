import React from "react";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      Todos os direitos reservados {new Date().getFullYear().toString()} ©
    </footer>
  );
};

export default Footer;
