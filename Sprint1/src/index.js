import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inicio from '../src/paginas/Inicio/Inicio';
import Nosotros from './paginas/Nosotros/Nosotros';
import Domicilios from './paginas/Domicilios/Domicilios';
import Create from "./paginas/CrearUsuario/create";
import { AppProvider } from './paginas/CrearUsuario/appContext';
import { AppContext } from "../src/paginas/CrearUsuario/appContext";
import Show from '../src/paginas/CrearUsuario/Show';
import{ ProductosLista } from "../src/componentes/Productos/index";
import { DataProvide }  from "../src/context/dataProvider";
import Admin from './paginas/admin/admin';
import Ventas from './paginas/admin/ventas';
import VistaAdmin from "../src/paginas/admin/vistaAdmin";
import Especiales from './paginas/Especiales/Especiales';
import Header from "./componentes/Header/index";
import Carrito from "./componentes/Carrito/Carrito"
import Login from "./component/Login/login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvide>
  <BrowserRouter>
  <AppContext.Provider>
    <App/>
  </AppContext.Provider>
  </BrowserRouter>
  </DataProvide>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
