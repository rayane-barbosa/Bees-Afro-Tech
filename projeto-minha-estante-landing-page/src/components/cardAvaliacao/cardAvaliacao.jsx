import React from "react";
import './cardAvaliacao.css'
import data from '../livroAvaliado/data'

function CardAvaliacao(props) {
    return (
        <div className="CardAv">
            <div id="resenhaLivro">
                <img src={props.capaResenha} alt="capa-do-livro-avaliado"/>               
            </div>
            <div className="resenha">
                <h3>{props.resenha}</h3>
                <br/>           
            <p>{props.textoResenha}</p>
            </div>
        </div>
    );

}
export default CardAvaliacao;