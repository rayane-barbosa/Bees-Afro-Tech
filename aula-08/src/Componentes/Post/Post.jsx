import React from "react";
import './Post.css';
import Botao from "../Botao/Botao";



function Post() {
       return (
        <div className="postagem"> 

        <Botao nome="Curtir"/>
        <Botao nome="Compartilhar"/>                 
        </div>
    );
}

export default Post;