import React from "react";
import "./Button.css";


function Button(props) {
    return (
        <button className="Botao">
            {props.nome}           
        </button>
    );
}

export default Button;