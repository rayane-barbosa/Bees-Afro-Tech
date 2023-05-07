import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm(props) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const review = { title, image, text };
        props.onAddReview(review);
        setTitle('');
        setImage('');
        setText('');
    }
    return (
        <div className='review-form'>
            <h2>Avaliar Livro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titulo:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label htmlFor="image">URL da Imagem:</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />

                <label htmlFor="text">Avaliação:</label>
                <textarea
                    id="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button type="submit"> Adicionar Avaliação </button>
            </form>
        </div>
    );
}

export default ReviewForm;