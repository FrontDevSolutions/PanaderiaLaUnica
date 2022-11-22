/* Encargado de enrutar el proyecto */

import React from 'react'
import { Route, Routes } from "react-router-dom";
import Domicilios from '../../src/paginas/Domicilios/Domicilios';
import Nosotros from '../../src/paginas/Nosotros/Nosotros';
import Inicio from '../../src/paginas/Inicio/Inicio';
import Especiales from '../paginas/Especiales/Especiales';
import{ ProductosLista } from "../../src/componentes/Productos/index";
import Ventas from '../paginas/admin/ventas';
import VistaAdmin from '../paginas/admin/vistaAdmin';
import TablaProductos from '../componentes/Productos/TablaProductos';
import Usuarios from '../paginas/usuarios/TablaProductos';
import CrearProducto from '../componentes/Productos/CrearProducto';
import Login from '../component/Login/login';
import Compra from "../paginas/Compra/compra";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/menu'  element = {<ProductosLista/>} />
        <Route path='/especiales' element = {<Especiales/>} />
        <Route path='/domicilios' element={<Domicilios/>} />
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path="/admin" element= {<VistaAdmin/>}/>
        <Route path="/adminVentas" element= {<Ventas/>} />
        <Route path="/adminProductos" element= {<TablaProductos/>} />
        <Route path="/adminUsuarios" element= {<Usuarios/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/ingresarProducto" element={<CrearProducto />} />
        <Route path="/" element= {<Inicio/>} />
        </Routes>
    </section>
  )
}