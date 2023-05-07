import React from 'react';
import LivroAvaliado from '../LivroAvaliado/LivroAvaliado.jsx';
import './Catalogo.css';

function Catalogo(props){
    return(
        <div className='catalogo'>
            {props.books.map(book => (
                <LivroAvaliado
                key={book.id}
                title={book.title}
                description = {book.description}
                image={book.image}
                rating={book.rating}
                />
            ))}
        </div>
    );
}

export default Catalogo;