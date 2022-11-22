import logo from './logo.svg';
import './App.css';
import React from 'react'
import 'boxicons'; 
import {Header} from "./componentes/Header/index"
import {BrowserRouter as Router} from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvide }  from "./context/dataProvider";
import { Carrito } from './componentes/Carrito/Carrito';


function App() {
  return (
    <DataProvide>
      
    <div className="App">
    <Header/>
    <Carrito/>
    <Paginas />
    </div>

    </DataProvide>
  );
}

export default App;