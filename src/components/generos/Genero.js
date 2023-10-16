import React, { useEffect, useState } from 'react';
import { obtenerGeneros } from '../../services/GeneroService';

export default function Genero() {
    const [generos, setGeneros ] = useState([])

    useEffect(() => {
      listarGeneros()
    },[] )
  
    const listarGeneros = async () => {
        try {
            const {data} = await obtenerGeneros()
            setGeneros(data)
        } catch(e){
            console.log(e)

        }
        
    }
  
  return (
    
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            generos.map(( {nombre, descripcion, estado}, index) => {
              return(
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{nombre}</td>
                <td>{estado ? 'Activo' : 'Inactivo'}</td>
                <td>{descripcion}</td>
                <td>
                <button type="button" class="btn btn-success">Editar</button>
                <button type="button" class="btn btn-warning">Borrar</button>
                </td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
      
      <button type="button" 
      class="btn btn-primary" 
      data-bs-toggle="modal" 
      data-bs-target="#exampleModal" 
      data-bs-whatever="@mdo">
      Nuevo Genero
      </button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
