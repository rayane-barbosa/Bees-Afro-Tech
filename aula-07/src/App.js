import React from "react";
import './App.css';
import Menu from './Components/Menu/Menu.jsx';
import Body from './Components/Body/Body.jsx'




function App() {
  return (
    <div className="App">
      <Menu         
        menuItems={["Sobre", "Cardápio", "Programação","Contato"]}
        />
        <br/>
        <Body
        title="O restaurante no fim do universo"
          
        />
        {/* Conteudo */}


        
      
    </div>
  );
}

export default App;
