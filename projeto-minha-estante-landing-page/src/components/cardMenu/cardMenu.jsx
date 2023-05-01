import React from "react";
import './cardMenu.css'

function CardMenu(props) {
    return (
        <div id="Cardmenu">
            <div id="icone">
                {props.icone}
            </div>
            <a href="">{props.nome}</a>
        </div>
    );

}

export default CardMenu;

