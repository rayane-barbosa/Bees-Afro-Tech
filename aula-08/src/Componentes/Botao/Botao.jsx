import React from "react";
import "./Botao.css";


function Botao(props) {
    return (
        <div className="alinhaBtn">
        <button className="botao">
            {props.nome}           
        </button>
        </div>
    );
}
export default Botao;