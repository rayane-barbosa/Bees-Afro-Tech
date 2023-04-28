import icone from './icone.png';
import './App.css';
import Header from './Componentes/Header/Header.jsx';
import imagem from './imagem.png';
import Linha from './Componentes/LinhaDivisoria/LinhaDiv.jsx';

function App() {
  return (
    <div className="App">

      <Header
      titulo="Meu feed"
      imagem = {imagem}
      alt ="imagem-bloco-anotacoes"
      />

      <Linha/>      
      
      {/* Linha Divisoria*/}

      {/* INPUT*/}

      {/* BUTTON*/}

      {/* 3 POST
        BOTÕES*/}
   
    </div>
  );
}

export default App;
