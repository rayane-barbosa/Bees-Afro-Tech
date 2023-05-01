import './App.css';
import Header from './components/header/header.jsx';
/*import Livro from './components/livro';
import CardAvaliacao from './components/card-avalicao';
import Catalogo from './components/catalogo'; 
import Menu from './components/menu/menu.jsx'; */
import MinhaEstante from './components/minhaEstante/minhaEstante';
import CardAvaliacao from './components/cardAvaliacao/cardAvaliacao';





/*function App() {

  return (
    <div className="App">
      <Header
        user="Rayane Barbosa"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR590Iy2piOnOJN-vrzJKc3S6pn3P02DX-4i7Ve2TinUQ&s"
        altAvatar="imagem-perfil"
        lidos="130"
        vouLer="60"
      />
      <Menu opcoes={opcoes} /> 
      
    </div>
  );
} */

function App() {
  return (
    <div className="App">
      <Header
        user="Rayane Barbosa"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR590Iy2piOnOJN-vrzJKc3S6pn3P02DX-4i7Ve2TinUQ&s"
        altAvatar="imagem-perfil"
        lidos="130"
        vouLer="60"
      />
      <b><hr/></b>
      <h1 className="texto">Minha Estante</h1>
      {/* <Menu opcoes={opcoes} /> */}
      <MinhaEstante />
      <h1 className="texto">Últimas Avaliações</h1>
      <CardAvaliacao className="CardAv"
      resenha="Título Resenha"
      textoResenha="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>      
    </div>
  );

}

export default App;
