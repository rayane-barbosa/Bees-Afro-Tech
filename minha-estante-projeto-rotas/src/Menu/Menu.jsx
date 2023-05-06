import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';

function Menu(){
    return(
        <nav>
            <ul>
                <li><NavLink exact to='/'>Inicio</NavLink></li>
                <li><NavLink to='/catalogo' >Catalogo</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;