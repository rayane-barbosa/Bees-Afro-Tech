import React from "react";
import './Header.css';


function Header(props){
    return(
        <header className="header">
            <img src={props.imagem} alt={props.alt}/>
            <h1>{props.titulo}</h1>            
        </header>
    );
} export default Header;