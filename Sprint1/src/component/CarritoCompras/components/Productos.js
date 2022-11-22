import React from 'react'

const Productos = ({ data, addToCart }) => {
    let { id, name, price, stock } = data;
return (
    <div style={{ border: "thin solid gray"}}>
    <h4>{name}</h4>
    <h5>${price}.00</h5>
    <h5>{stock}</h5>
    <button onClick={() => addToCart(id)}>Agregar</button>
</div>
);
};

export default Productos;