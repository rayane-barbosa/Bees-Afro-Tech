import React from "react";
import "./Menu.css";
import Button from "../Button/Button";




function Menu(props) {
    return (
        <header className="Menu">
            
            <nav>
                <ul>
                    {props.menuItems.map((item, index) => (
                        <Button key={index} nome ={item}/>
                    ))}

                </ul>
            </nav>

        </header>
    );
}

export default Menu;