import React from "react";
import './App.css';
import Menu from './Components/Menu/Menu.jsx';




function App() {
  return (
    <div className="App">
      <Menu 
        title="O restaurante no fim do universo"
        menuItems={["Cardapio", "Programação","Sobre", "Contato"]}
        />
        <main>
          {/* Conteudo */}
        </main>
      
    </div>
  );
}

export default App;
