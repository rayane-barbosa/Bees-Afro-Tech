import React from "react";
import "./Menu.css";




function Menu(props) {
    return (
        <header className="Menu">
            <h1>{props.title}</h1>
            <nav>
                <ul>
                    {props.menuItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </nav>

        </header>
    );
}

export default Menu;