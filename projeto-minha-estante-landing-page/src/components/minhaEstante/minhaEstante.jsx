import React from "react";
import './minhaEstante.css';
import LivroAvaliado from "../livroAvaliado/livroAvaliado";
import Menu from "../menu/menu.jsx";
import iconFavoritos from '../icons/iconFavoritos.png';
import iconDesejados from '../icons/iconDesejados.png';
import iconAvaliados from '../icons/iconAvaliados.png';
import iconResenhas from '../icons/iconResenhas.png';




/*function MinhaEstante(props) {
    const opcoes = props.opcoes.map((opcao) => (
      <LivroAvaliado capaLivro={opcao.capa} avalIcon={opcao.avaliacao}  />
    ));
  
    return <div className="Menu">{opcoes}</div>;
  }
  
  export default MinhaEstante; */

  function MinhaEstante() {
    const opcoes = [
        {
          icone: (
            <span>
              <img className="icone"
                src={iconFavoritos}
                alt="Favoritos"
              />
            </span>
          ),
          nome: "Favoritos" },
          {
            icone: (
              <span>
                 <img className="icone"
                  src={iconDesejados}
                  alt="Desejados"
                />
              </span>
            ),
            nome: "Desejados" },
            {
              icone: (
                <span>
                   <img className="icone"
                    src={iconAvaliados}
                    alt="Avaliados"
                  />
                </span>
              ),
              nome: "Avaliados" },
              {
                icone: (
                  <span>
                     <img className="icone"
                      src={iconResenhas}
                      alt="Resenhas"
                    />
                  </span>
                ),
                nome: "Resenhas" } 
      
      ];
  
    return (
      <div className="minhaEstante">
        <h1>Minha Estante</h1>
        <Menu className="alinhaMenu" opcoes={opcoes} />
        <LivroAvaliado/>
      </div>
    );
  }
  
  export default MinhaEstante;
  