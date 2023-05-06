import React from 'react';
import './CardAvaliacao.css';


function CardAvaliacao(props){
    return(
        <div className='review-card'>
            <img src={props.image} alt={props.title} />
            <div className='info'>
                <h2>
                    {props.title}
                </h2>
                <p>
                 {props.text}
                </p>
            </div>
        </div>
    );
}

export default CardAvaliacao;