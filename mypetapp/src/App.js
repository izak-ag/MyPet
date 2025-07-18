import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Cadastro from "./pages/Cadastro.jsx"
import Login from "./pages/Login.jsx"
import Perfil from "./pages/Perfil/Perfil.jsx";
import Contact from "./pages/Contact/Contact.tsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
