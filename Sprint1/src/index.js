import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inicio from './paginas/Inicio/Inicio';
import Nosotros from './paginas/Nosotros/Nosotros';
import Domicilios from './paginas/Domicilios/Domicilios';
import Carrito from "../src/component/CarritoCompras/components/Carrito";
import Login from "../src/component/Login/login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Login/>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
