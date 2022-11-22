import React, { useState } from 'react'

const Create = () => {
    const [name, setName]= useState("")
    const [password, setPassword]= useState("")
    const handleSubmit= (e) => {
        e.preventDefault ()
        console.log("submit")
    }

  return (
    <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
              <input 
              value={name}
              onChange= {(e)=> setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"/>
                  <label >Name</label>
          </div>
          <div className="form-floating">
              <input 
              value={password}
              onChange= {(e)=> setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Password"/>
                  <label>Password</label>
          </div>
          <div className="boton">
              <button className="btnprimary" type="submit">Crear Usuario</button>
          </div>
    </form>
  )
}

export default Create