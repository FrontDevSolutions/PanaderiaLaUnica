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
    name: "",
    fechaNacimiento: "",
    email: "",
    password: ""
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
            <th>ID</th>
            <th>name</th>
                <th class="text-center">FechaNacimiento</th>
                <th>Email</th>
                <th>password</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.map((dato) => (
                <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.name}</td>
                <td class="text-center">{dato.fechaNacimiento}</td>
                <td>{dato.email}</td>
                <td>{dato.password}</td>
                <div className='btn-grow'> 
                    <button className='btn btn-info'> <i className='fa-regular fa-pen-to-square'/> </button>
                    <button className='btn btn-danger'> <i className='fa-regular fa-trash-can'/> </button>
                    </div>
                </tr>
            ))}
            </tbody>
            <div  className="m-0 row justify-content-center">
        <Button color="info" onClick={()=>this.mostrarModalInsertar()}>Crear Usuario</Button>
        </div >
        </Table>

        </Container>

    </div>
    );
}  
}
export default Ventas;