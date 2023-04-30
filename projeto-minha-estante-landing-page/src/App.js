import './App.css';
import Header from './components/header/header.jsx';
/*import Livro from './components/livro';
import CardAvaliacao from './components/card-avalicao';
import Catalogo from './components/catalogo';
import Menu from './components/Menu';*/

import './App.css';

function App() {
  return (
    <div className="App">
      {/** Criação dos componentes react */}


      {/** Header
     * Imagem
     * Nome
     *  Livros Lidos
     * Livros que vou ler
    */}

      <Header
        user="Rayane Barbosa"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR590Iy2piOnOJN-vrzJKc3S6pn3P02DX-4i7Ve2TinUQ&s"
        altAvatar="imagem-perfil"
        lidos="130"
        vouLer="60"
      />

    </div>
  );
}

export default App;
