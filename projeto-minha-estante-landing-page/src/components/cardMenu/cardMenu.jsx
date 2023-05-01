import React from "react";
import './cardMenu.css'

/*function CardMenu(props) {
    return (
        <div id="Cardmenu">
            <div id="icone">
                {props.icone}
            </div>
            <a href="">{props.nome}</a>
        </div>
    );

}

export default CardMenu;*/

function CardMenu(props) {
return (
<div className="card-menu">
<div className="card-menu__icon">{props.icone}</div>
<a className="card-menu__link" href="#">
{props.nome}
</a>
</div>
);
}

export default CardMenu;





