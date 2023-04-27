import React from "react";
import "./Button.css";




function Button(props) {
    return (
        <button className="Botao">
            {props.botao}
        </button>


    );
}

export default Button;