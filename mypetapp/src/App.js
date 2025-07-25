import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Login from "./pages/Login/Login.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";
import Contact from "./pages/Contact/Contact.tsx";
import Prestador from "./pages/Prestador.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/prestador" element={<Prestador />} />
    </Routes>
  );
}

export default App;
