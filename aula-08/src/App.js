import icone from './icone.png';
import './App.css';
import Header from './Componentes/Header/Header.jsx';
import imagem from './imagem.png';
import Linha from './Componentes/LinhaDivisoria/LinhaDiv.jsx';
import NovoPost from './Componentes/NovoPost/NovoPost';
import Post from './Componentes/Post/Post';

function App() {
  return (
    <div className="App">

      <Header
        titulo="Meu feed"
        imagem={imagem}
        alt="imagem-bloco-anotacoes"
      />
      <Linha />
      <NovoPost />
      <Linha />
      <Post />
      <Post />
      <Post />


      {/* Linha Divisoria*/}




      {/* 3 POST
        BOTÕES*/}

    </div>
  );
}

export default App;
