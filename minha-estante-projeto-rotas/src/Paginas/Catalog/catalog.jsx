import React from 'react';
import './catalog.css';
import BookCard from '/Paginas/BookCard.jsx';

function Catalog(props) {
    return (
        <div className="catalog">
            {props.books.map((book, index) => (
                <BookCard
                    key={index}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                />
            ))}
        </div>
    );

}
export default Catalog;