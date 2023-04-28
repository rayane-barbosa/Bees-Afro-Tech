import React from "react";
import './Body.css';


function Body(props){
    return(
        <div className="principal">
             <div className="imagem">
                <img src={props.imagem}  alt="imagem"/>
            </div>
            <div className="texto">
            <h1>{props.title}</h1>
            <p>{props.texto}</p>
            </div>

        </div>
    );
} export default Body;
