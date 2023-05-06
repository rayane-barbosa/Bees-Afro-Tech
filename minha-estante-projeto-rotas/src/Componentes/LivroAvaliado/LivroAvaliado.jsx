import React from 'react';
import { FaStar } from 'react-icons/fa';
import './LivroAvaliado.css';

function LivroAvaliado(props) {
    return (
        <div className='book-rating'>
            <img src={props.image} alt={props.title} />
            <div className='rating'>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>
                <div className='stars'>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={i}>
                                <input type="radio" name="rating" value={ratingValue} />
                                <FaStar
                                    className='star'
                                    color={ratingValue <= props.rating ? '#ffc107' : '#e4e5e9'} />
                            </label>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LivroAvaliado;