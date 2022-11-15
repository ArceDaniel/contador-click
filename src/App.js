import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import {Boton} from './componets/boton.jsx'
import {Contador} from './componets/contador.jsx'
import { useState } from 'react';


function App() {
  
const [numClics, setNumClics] = useState(0);

const incrementarContador = () => {
    setNumClics(numClics + 1);
  }

const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='logo de FreeCodeCamp'/> 
     </div>
     <div className='contenedor-principal'>
        <Contador numClics={numClics}  />
        <Boton
        texto='Click'
        buttonState={true}
        buttonController={incrementarContador} />
        <Boton
        texto='Reiniciar'
        buttonState={false}
        buttonController={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
