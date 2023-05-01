import React from "react";
import './minhaEstante.css';
import LivroAvaliado from "../livroAvaliado/livroAvaliado";

function MinhaEstante(props) {
    const opcoes = props.opcoes.map((opcao) => (
      <LivroAvaliado capaLivro={opcao.capa} avalIcon={opcao.avaliacao}  />
    ));
  
    return <div className="Menu">{opcoes}</div>;
  }
  
  export default MinhaEstante;