import React from "react";
import './cardAvaliacao.css'

function CarAvaliacao(props) {
    return (
        <div id="CardAv">
            <div id="resenha">
                {props.resenha}
            </div>
            <a href="">{props.nome}</a>
        </div>
    );

}

export default CardAvaliacao;