import icone from './icone.png';
import './App.css';
import Header from './Componentes/Header/Header.jsx';
import imagem from './imagem.png';
import Linha from './Componentes/LinhaDivisoria/LinhaDiv.jsx';
import Input from './Componentes/Input/Input';
import Botao from './Componentes/Botao/Botao';

function App() {
  return (
    <div className="App">

      <Header
      titulo="Meu feed"
      imagem = {imagem}
      alt ="imagem-bloco-anotacoes"
      />

      <Linha/>      
      <Input defaultText="o que estou pensando..."/>
      <Botao nome="Publicar"/>
      <Linha/>       

           
      {/* Linha Divisoria*/}

      
      

      {/* 3 POST
        BOTÕES*/}
   
    </div>
  );
}

export default App;
