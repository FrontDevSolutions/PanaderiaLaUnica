import React, { useContext } from 'react'
import { DataContext } from "../../context/dataProvider";
import "../../componentes/Productos/index.css"

export const Compra = () => {
    const value = useContext(DataContext)
    const [carrito] = value.carrito;
    const [total] = value.total;

    return (
        <>
        <h2>Su Compra</h2>
        
        <div className='compra'>
        
        {
        carrito.map((producto) => (
           <div className='carrito_item' key={producto.id}>
            <img src={producto.image} alt="" />
            <div>
              <h3>{producto.title}</h3>
              
              <p className='price'>${producto.price}</p>
              
            </div>
            <p style={{fontSize: "1.8rem" , fontWeight: "bold"}}>{producto.cantidad}</p>
          </div>
          
        ))
        }
        <h3>Total: ${total}</h3>
        <button className='btnCarro'>Pagar</button>
        <br></br>
        <br></br>
        </div>
    </>
    );
};

export default Compra;