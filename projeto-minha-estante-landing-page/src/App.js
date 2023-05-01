import './App.css';
import Header from './components/header/header.jsx';
/*import Livro from './components/livro';
import CardAvaliacao from './components/card-avalicao';
import Catalogo from './components/catalogo'; */
import Menu from './components/menu/menu.jsx';
import iconFavoritos from './iconFavoritos.png';
import iconDesejados from './iconDesejados.png';
import iconAvaliados from './iconAvaliados.png';
import iconResenhas from './iconResenhas.png'

const opcoes = [
  {
    icone: (
      <span>
        <img className="icone"
          src={iconFavoritos}
          alt="Favoritos"
        />
      </span>
    ),
    nome: "Favoritos" },
    {
      icone: (
        <span>
           <img className="icone"
            src={iconDesejados}
            alt="Desejados"
          />
        </span>
      ),
      nome: "Desejados" },
      {
        icone: (
          <span>
             <img className="icone"
              src={iconAvaliados}
              alt="Avaliados"
            />
          </span>
        ),
        nome: "Avaliados" },
        {
          icone: (
            <span>
               <img className="icone"
                src={iconResenhas}
                alt="Resenhas"
              />
            </span>
          ),
          nome: "Resenhas" } 

];

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
      <Menu opcoes={opcoes} />
      
    </div>
  );
}

export default App;
