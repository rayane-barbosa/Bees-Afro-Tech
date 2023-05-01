import React from "react";
import './menu.css';
import CardMenu from "../cardMenu/cardMenu";

function Menu(props) {
    const opcoes = props.opcoes.map((opcao) => (
      <CardMenu icone={opcao.icone} nome={opcao.nome}  />
    ));
  
    return <div className="Menu">{opcoes}</div>;
  }
  
  export default Menu;