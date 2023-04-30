import React from "react";
import './menu.css';
import CardMenu from "../cardMenu/cardMenu";

function Menu(props) {
    return (
        <div id="menu">
            <nav>
                <ul>
                    {props.menuItems.map((item, index) => (
                        <CardMenu key={index} nome={item} />
                    ))}
                </ul>

            </nav>


        </div>

    );

}

export default Menu;