import React, { useContext } from 'react'
import Header from '../Header';
import './index.css';
import { DataContext } from "../../context/dataProvider";
import { ProductoItem } from "./ProductoItem.js";

export const ProductosLista = () => {

  const value = useContext(DataContext)
  const  [productos] = value.productos     /* erorr  como carajos lo solucione */
  console.log(productos) 

  return (
    <>

    <h1 className="title">MENÚ</h1>  
    <div className="productos">
    {
      productos.map(producto =>(
        <ProductoItem 
        
        key = {producto.id}
        id ={producto.id}
        title ={producto.title}
        price ={producto.price}
        image ={producto.image}
        category ={producto.category}
        cantidad ={producto.cantidad}
        stock = {producto.stock}
        /> 
      ))}

      </div>
      
      </>
  );
};