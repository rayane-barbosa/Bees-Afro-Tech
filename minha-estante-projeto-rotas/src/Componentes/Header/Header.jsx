import React from 'react';
import './Header.css';

function Header (props){
    return(
   <header>
    <img src={props.avatar} alt= {props.alt} />
    <div className='user-info'>
        <h1>{props.username}</h1>
        <h3>{props.lidos} livros lidos</h3>
        <h3>{props.vouLer} livros a ler</h3>
    </div>

   </header>

    );
}

export default Header;