import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../../images/img003.jpg"
import IMG2 from "../../images/img004.jpg"
import IMG3 from "../../images/img007.jpg"
import IMG4 from "../../images/img008.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,} from "reactstrap";

const data = [
    { id: 1, titulo:"Pan Corazon", price:"500",image: <img src={IMG1} width="250"/>, category: "Pan Dulce", stock: "120"},
    { id: 1, titulo:"Pan Navideño", price:"400",image: <img src={IMG2} width="250"/>, category: "Pan Dulce", stock: "200"},
    { id: 1, titulo:"Pan Frances", price:"360",image: <img src={IMG3} width="250"/>, category: "Pan De Sal", stock: "20"},
    { id: 1, titulo:"Pan Dona", price:"335",image: <img src={IMG4} width="250"/>, category: "Pan Dulce", stock: "80"},
];

class Ventas extends React.Component {
state = {
    data: data,
    form: {
    id: "",
    titulo: "",
    price: "",
    image: require,
    category: "",
    stock: ""
    },
};

render()
{
    return (
        <div>
        <Container>

        <Table>
            <thead>
            <tr>
            <th>Producto</th>
                <th class="text-center">Precio</th>
                <th>Imagen</th>
                <th>Categoria</th>
                <th>Stock</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.map((dato) => (
                <tr key={dato.id}>
                <td>{dato.titulo}</td>
                <td>{dato.price}</td>
                <td class="text-center">{dato.image}</td>
                <td>{dato.category}</td>
                <td>{dato.stock}</td>
                <div className='btn-grow'> 
                    <button className='btn btn-info'> <i className='fa-regular fa-pen-to-square'/> </button>
                    <button className='btn btn-danger'> <i className='fa-regular fa-trash-can'/> </button>
                    </div>
                </tr>
            ))}
            </tbody>
            <Link to={"/ingresarProducto"}><Button color="info" onClick={()=>this.mostrarModalInsertar()}>Crear Productos</Button></Link>
            </Table>
        </Container>

    </div>
    );
}  
}
export default Ventas;