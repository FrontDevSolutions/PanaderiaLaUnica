import React from 'react'
import 'bootstrap';
import { AppContext, useAppContext } from '../CrearUsuario/appContext';

const Show = () => {
    const usuarios = useAppContext (AppContext)
    console.log(usuarios)

  return ( 
    <>
      <table className="table table-striped mt-5">
          <thead className='bg-dark text-white'>
              <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Contraseña</th>
              </tr>
          </thead>

          <tbody>
            {usuarios.map ((usuarios) => (
              <tr key={usuarios.id}>  
                  <th> {usuarios.name}</th>
                  <td> {usuarios.password} </td>
                  <td>
                    <div className='btn-grow'> 
                    <button className='btn btn-info'> <i className='fa-regular fa-pen-to-square'/> </button>
                    <button className='btn btn-danger'> <i className='fa-regular fa-trash-can'/> </button>
                    </div>
                  </td>
              </tr>
            ))}

           </tbody>
      </table>
      </>
  )
}

export default Show;