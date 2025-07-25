import { useEffect, useState } from "react";
import axios from "axios";
import "./Prestador.css";

export default function Prestador() {
  const cuidadorId = 1; // ID do cuidador fixo (pode vir de rota futuramente)
  const [comentario, setComentario] = useState("");
  const [avaliacao, setAvalicao] = useState("");
  const [nome, setNome] = useState("");
  const [avaliacoes, setAvaliacoes] = useState([]);

  const carregarComentarios = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/comentarios/${cuidadorId}`
      );
      setAvaliacoes(res.data);
    } catch (error) {
      console.error("Erro ao carregar comentários:", error);
    }
  };

  const handleSubmit = async () => {
    if (!comentario.trim() || !nome.trim()) return;
    try {
      await axios.post("http://localhost:3001/comentarios", {
        cuidadorId,
        nome,
        comentario,
        avaliacao,
      });
      setComentario("");
      setNome("");
      setAvalicao("");
      carregarComentarios();
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }
  };

  useEffect(() => {
    carregarComentarios();
  }, []);

  return (
    <div className="prestador-container">
      <h2 className="subtitle">Prestador</h2>
      <div className="card-prestador">
        <img width={150} height={150} src="/images/marco.jpeg" alt="" />
        <div className="info-prestador">
          <h3>Marcos Aurélio</h3>
          <p>⭐ 3.5/5</p>
          <p>
            Olá! Me chamo Marcos Aurélio e sou cuidador de pets há mais de 3
            anos. Tenho experiência com cães e gatos de todas as idades,
            oferecendo carinho, alimentação, passeios e acompanhamento diário.
            Cuido como se fossem meus, sempre respeitando as orientações dos
            tutores. Também envio fotos e vídeos durante o cuidado para garantir
            sua tranquilidade. Seu pet estará em boas mãos! 🐾
          </p>
          <ul>
            <li>Passeio</li>
            <li>Banho</li>
            <li>Alimentação</li>
          </ul>
          <button className="btn button1">Contatar</button>
        </div>
      </div>

      <button className="denunciar">⚠️ Denunciar</button>

      <h3 className="subtitle">Avaliações</h3>
      <div className="avaliacao-form">
        <div className="form-div">
          <label>Nome: </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-div">
          <label>Avaliação</label>
          <div>⭐</div>
          <input
            type="number"
            id="avalicao"
            name="avalicao"
            onChange={(e) => setAvalicao(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Digite seu comentário"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button className="btn button1" onClick={handleSubmit}>
          Enviar
        </button>
      </div>

      {avaliacoes.map((av, idx) => (
        <div className="card-avaliacao" key={idx}>
          <img src="images/coment.jpeg" className="mini-foto" alt="" />
          <div>
            <h4>{av.nome}</h4>
            <p>{av.comentario}</p>
            <p>Avaliação: {av.avaliacao}/5 ⭐</p>
          </div>
        </div>
      ))}
    </div>
  );
}
