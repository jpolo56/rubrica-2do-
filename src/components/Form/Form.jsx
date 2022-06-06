import React, { useEffect, useState } from 'react'

const Form = () => {
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [fecha, setFecha] = useState('')
    const [mail, setMail] = useState('')
    const [persona, setPersona] = useState(null)

    const [listaPersonas, setListaPersonas] = useState([])

    const resetear = () =>{
        setNombre('')
        setEdad('')
        setId('')
        setApellido('')
        setFecha('')
        setMail('')
      }
    useEffect(() => {
      setPersona({
        id:id,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        fecha: fecha,
        mail:mail
    })
    
    /* llenarTabla() */
      
    })

    const llenarTabla = () =>{


      return <>
      { }
      </>
    }
    
    const validarFormulario = () =>{
        if (id==''||nombre=='' || apellido=='' || edad == '' || fecha == '' || mail=='') {
            return true
            
        }else{
            return false
        }
        }
    const eliminar = (id) =>{
      setListaPersonas(listaPersonas.filter((persona)=>persona.id != id))
    }
    const guardarPerson = () =>{
     
    
        setListaPersonas([... listaPersonas, persona])
        resetear()
    }

  return (
  <>
  <div className="form-control">
      <label  className="form-label">REGISTRAR PERSONA</label>
        <div className="row">
        <div className="col 3">
            <label htmlFor="nombreProducto" className="form-label">
              Identificacion
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              placeholder="123123"
              value={id}
              onChange={e => (setId(e.target.value)
               
              )}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="nombreProducto" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreProducto"
              placeholder="Pera"
              value={nombre}
              onChange={e => {setNombre(e.target.value)
              console.log(nombre);
              }}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="descripcionProducto" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="descripcionProducto"
              placeholder="EMPRESA"
              value={apellido}
              onChange={e => (setApellido(e.target.value))}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="precio" className="form-label">
              Edad
            </label>
            <input
              type="number"
              className="form-control"
              id="precio"
              placeholder="8"
              value={edad}
              onChange={e => (setEdad(e.target.value))}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col 3">
            <label htmlFor="precio" className="form-label">
              Fecha Nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              placeholder="8"
              value={fecha}
              onChange={e => {setFecha(e.target.value)
              
              }}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="codigo" className="form-label">
              Correo Electronico
            </label>
            <input
              type="mail"
              className="form-control"
              id="mail"
              placeholder="mail@mail.com"
              value={mail}
              onChange={e => (setMail(e.target.value))}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
        <button type="button" className="btn btn-success" onClick={guardarPerson} disabled={validarFormulario()}>Guardar</button>
        <button type="button" className="btn btn-danger" onClick={/* ()=>(setcrear(false), */()=>resetear()}>Cancelar</button>
        </div>
      </div>

      <div className="container fluid">
      <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Edad</th>
                <th scope="col">Fecha de Nacimiento</th>
                <th scope="col">Boton</th>


              </tr>
            </thead>
            <tbody id="tabla">
            {
               listaPersonas.map((persona)=>{
                 return <>
                <tr key={persona.id}>
                <th scope="row">{persona.id}</th>
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.mail}</td>
                <td>{persona.edad}</td>
                <td>{persona.fecha}</td>
                
                <td>
                  
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminar(persona.id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
              
              </>


                })
            }
            </tbody>
            </table>

      </div>
  </>
  )
}

export default Form