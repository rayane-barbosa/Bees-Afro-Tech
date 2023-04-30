import React from "react";
import './header.css';

function Header(props) {
    return (
      <header id="header">
        <div id="imagem">
          <img src={props.avatar} alt={props.altAvatar} />
        </div>
        <h1>{props.user}</h1>
        <h2>{props.lidos} lidos</h2>
        <h2>{props.vouLer} vou ler</h2>
      </header>
    );
  }
  
  export default Header;
  