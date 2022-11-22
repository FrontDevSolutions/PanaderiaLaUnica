import React from 'react'
import IMG from "../Especiales/torta1.jpg"
import IMG1 from "../Especiales/torta2.jpg"

export const Especiales = () => {
  return (
    <>
    <h1 className="title">ESPECIALES</h1>  
    <div className="productos">
    <div className="producto">
      <a href="#">
      <div className="producto__img">
        <img src={IMG} alt=""/>
      </div>
      </a>
      <div className="producto__footer">
        <h1> Torta Infantil </h1>
        <p> Torta decorada con tematica infantil femenina </p>
        <p className="price"> $60000 </p>
      </div>
      <div className="buttom">
        <button className="btn">
            Añadir al carrito
            </button>
      <div>      
            <a href="#" className="btn">
              Vista
              </a>
            </div>
      </div>
      </div>


           <div className="producto">
      <a href="#">
      <div className="producto__img">
        <img src={IMG1} alt=""/>
      </div>
      </a>
      <div className="producto__footer">
        <h1> Torta Infantil </h1>
        <p> Torta decorada con tematica infantil masculina </p>
        <p className="price"> $60000 </p>
      </div>
      <div className="buttom">
        <button className="btn">
            Añadir al carrito
            </button>
      <div>      
            <a href="#" className="btn">
              Vista
              </a>
            </div>
      </div>
      </div>                                         
      </div>
    </>
  )
}

export default Especiales;
