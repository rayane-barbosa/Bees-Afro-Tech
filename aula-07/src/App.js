import React from "react";
import './App.css';
import Menu from './contents/Menu/Menu';




function App() {
  return (
    <div className="App">
      <Menu 
        title="O restaurante no fim do universo"
        menuItems={["Cardápio", "Sobre", "Contato"]}
        />
        <main>
          {/* Conteudo */}
        </main>
      
    </div>
  );
}

export default App;
