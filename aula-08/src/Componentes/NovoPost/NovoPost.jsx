import React from "react";
import Input from "../Input/Input";
import Botao from "../Botao/Botao";

function NovoPost() {
    return (
        <div>
            <Input defaultText="o que estou pensando..." />
            <div className="alinhaBotao">
                <Botao nome="Publicar" />
            </div>
        </div>
    );

}

export default NovoPost;