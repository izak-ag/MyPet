import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Perfil from "./pages/Perfil/Perfil.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}

export default App;
