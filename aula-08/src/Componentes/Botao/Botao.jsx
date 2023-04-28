import React from "react";
import "./Botao.css";


function Botao(props) {
    return (
        <button className="Botao">
            {props.nome}           
        </button>
    );
}
export default Botao;