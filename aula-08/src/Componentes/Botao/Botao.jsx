import React from "react";
import "./Botao.css";


function Botao(props) {
    const { nome, alinhamento } = props;

       return (
        <button className="botao">
            {nome}
        </button>

    );
}
export default Botao;