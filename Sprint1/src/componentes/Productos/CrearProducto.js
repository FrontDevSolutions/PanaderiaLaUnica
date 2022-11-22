import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,} from "reactstrap";

const data = [
    
{ id: 1, titulo:<input type="String" />, price:<input type="String" />,image: <input type="file" />, category: <input type="String" />, stock: <input type="String" />},
{ id: 1, titulo:<input type="String" />, price:<input type="String" />,image: <input type="file" />, category: <input type="String" />, stock: <input type="String" />},
{ id: 1, titulo:<input type="String" />, price:<input type="String" />,image: <input type="file" />, category: <input type="String" />, stock: <input type="String" />},

];

class CrearProducto extends React.Component {
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
                </tr>
            ))}
            </tbody>
            <Link to={"/ingresarProducto"}><Button color="info" onClick={()=>this.mostrarModalInsertar()}>Guardar</Button></Link>
            </Table>
        </Container>

    </div>
    );
}  
}
export default CrearProducto;