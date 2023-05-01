import React from "react";
import "./livroAvaliado.css";
import data from "./data.js";

function LivroAvaliado() {
  return (
    <div className="alinhaLivro">
      {data.map((livro) => (
        <div key={livro.id}>
          <img className="Capa" src={livro.capa} alt={livro.nome} />
          <p>Avaliação: {livro.avaliacao}</p>
        </div>
      ))}
    </div>
  );
}

export default LivroAvaliado;
