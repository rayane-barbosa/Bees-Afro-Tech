import React from 'react';
import './BookCard.css';

function BookCard(props) {
    return (
        <div className="book-card">
            <img className='book-image' src={props.image} alt={props.title} />
            <div className='book-details'>
                <h3 className='book-title'>{props.title}</h3>
                <p className='book-author'>{props.author}</p>
            </div>
        </div>
    );
}

export default BookCard;