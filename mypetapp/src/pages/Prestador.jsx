import { useState } from "react";

import "./Prestador.css";

const Prestador = () => {
  const [comentario, setComentario] = useState("");
  const [avaliacoes, setAvaliacoes] = useState([
    {
      nome: "Name",
      nota: 4.5,
      texto: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      nome: "Name",
      nota: 4.5,
      texto: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      nome: "Name",
      nota: 4.5,
      texto: "Lorem ipsum dolor sit amet consectetur...",
    },
  ]);

  const handleSubmit = () => {
    if (comentario.trim()) {
      setAvaliacoes([
        ...avaliacoes,
        { nome: "Você", nota: 5, texto: comentario },
      ]);
      setComentario("");
    }
  };

  return (
    <div className="prestador-container">
      <h2>Prestador</h2>
      <div className="card-prestador">
        <div className="imagem-placeholder"></div>
        <div className="info-prestador">
          <h3>Name</h3>
          <p>⭐ 4.5/5</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nac massa amet urna
            fermentum aliquet...
          </p>
          <ul>
            <li>Serviço 1</li>
            <li>Serviço 2</li>
          </ul>
          <button>Contatar</button>
        </div>
      </div>

      <button className="denunciar">⚠️ Denunciar</button>

      <h3>Avaliações</h3>
      <div className="avaliacao-form">
        <label>Avaliação</label>
        <div>⭐⭐⭐⭐⭐</div>
        <textarea
          placeholder="Placeholder"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>

      {avaliacoes.map((av, idx) => (
        <div className="card-avaliacao" key={idx}>
          <div className="mini-foto"></div>
          <div>
            <h4>{av.nome}</h4>
            <p>⭐ {av.nota}</p>
            <p>{av.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prestador;
