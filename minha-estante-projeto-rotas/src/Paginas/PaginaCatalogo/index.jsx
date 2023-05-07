import React, { useState } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import Header from '../../Componentes/Header/Header.jsx';
import Menu from '../../Componentes/Menu/Menu.jsx';
import Catalogo from '../../Componentes/Catalogo/Catalogo.jsx';
import CardAvaliacao from '../../Componentes/CardAvaliacao/CardAvaliacao.jsx';

function PaginaCatalogo(props) {
    const [reviews, setReviews] = useState([]);
    const history = useHistory();

    function handleAddReview(review) {
        setReviews([...reviews, review]);
        history.push('/');
    }

    return (
        <>

            <Header
                username={props.username}
                lidos={props.lidos}
                vouLer={props.vouLer}
            />
            <Menu>
                <Link to="/">Catálogo</Link>
                <Link to="/review">Avaliar Livro</Link>
            </Menu>
            <Switch>
                <Route exact path="/">
                    <Catalogo books={props.books} />
                </Route>
                <Route exact path="/review">
                    <ReviewForm onAddReview={handleAddReview} />
                </Route>
            </Switch>
            {reviews.length > 0 && (
                <>
                    <h2>Avalicações Recentes</h2>
                    {reviews.map((review, index) => (
                        <CardAvaliacao
                            key={index}
                            title={review.title}
                            image={review.image}
                            text={review.text}
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default PaginaCatalogo;




