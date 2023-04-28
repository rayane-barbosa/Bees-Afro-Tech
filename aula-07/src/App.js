import React from "react";
import './App.css';
import Menu from './Components/Menu/Menu.jsx';
import Body from './Components/Body/Body.jsx'
import  restaurante from './restaurante-foto.png'





function App() {
  return (
    <div className="App">
      <Menu         
        menuItems={["Sobre", "Cardápio", "Programação","Contato"]}
        />
        <br/>
        <Body
        title="O restaurante no fim do universo"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium qui in consequuntur exercitationem cupiditate nam dolores quos ducimus, beatae, doloremque, rem sint delectus pariatur nisi at numquam saepe dicta suscipit obcaecati? Id ex repudiandae porro dignissimos ipsum tempore iusto! Assumenda, sed provident, neque eum, sit repellat rerum exercitationem reiciendis animi doloremque porro alias voluptates vitae aut? Repudiandae qui iusto odio, sunt repellendus incidunt. Recusandae rerum architecto rem optio, odio quibusdam fugiat cupiditate, aspernatur maiores quaerat amet minus facilis sapiente iste hic blanditiis error eaque quisquam labore modi dignissimos accusamus neque sit molestiae? Saepe sapiente quos inventore ipsa dolorem."

        imagem={restaurante}
          
        />
        {/* Conteudo */}


        
      
    </div>
  );
}

export default App;
