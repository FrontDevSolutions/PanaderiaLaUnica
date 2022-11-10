import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Domicilios from './paginas/Domicilios/Domicilios';
import Nosotros from './paginas/Nosotros/Nosotros';
import Inicio from './paginas/Inicio/Inicio';
import Carrito from "../src/component/CarritoCompras/components/Carrito";

function App() {
  return (
    <section>
        <Routes>

          <Route path='/menu'  />
          <Route path='/especiales'  />
          <Route path='/domicilios' element={<Domicilios/>} />
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path="/" element= {<Inicio/>} />

        </Routes>

    <div>
    <h1>useReducer</h1>
    <hr/>
    <Carrito/> 
    </div>
</section>
  );
}

export default App;