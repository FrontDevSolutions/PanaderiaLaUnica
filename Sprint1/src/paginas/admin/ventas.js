import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,} from "reactstrap";

const data = [
{ id: 1, fecha:"18/11/2022", valor:"20.000"},
{ id: 2, fecha:"16/10/2022", valor:"10.000" },
{ id: 3, fecha:"11/11/2022", valor:"7.000" },
{ id: 4, fecha:"18/19/2022", valor:"13.000" },
];

class Ventas extends React.Component {
state = {
    data: data,
    form: {
    id: "",
    fecha: "",
    valor: "",
    },
};

render()
{
    return (
    <div>
        <Container>
        <br/>
        <Button color="warning" onClick={()=>this.mostrarModalInsertar()}>Listar Producto</Button>
        <div class= "btn btn-sm float-right">
        <Button color="warning">Listar Ventas</Button>
        </div>
        <br/>
        <Table>
            <thead>
            <tr>
                <th>ID</th>
                <th class="text-center">Fecha</th>
                <th>Valor</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.map((dato) => (
                <tr key={dato.id}>
                <td>{dato.id}</td>
                <td class="text-center">{dato.fecha}</td>
                <td>{dato.valor}</td>
                </tr>
            ))}
            </tbody>
            <tfoot>
            <tr>
                <td colspan="2"><strong>Total</strong></td>
                <td class="text-right"><strong>50.000</strong></td>
            </tr>
        </tfoot>
        </Table>

        </Container>

    </div>
    );
}  
}
export default Ventas;