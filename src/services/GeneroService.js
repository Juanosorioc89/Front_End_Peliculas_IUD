import { axiosconfiguration } from '../configuration/axiosconfiguration';

const obtenerGeneros = () =>{
    return axiosconfiguration.get('generos/?estado=true', {
        headers: {
          'Content-Type': 'aplication/json'
        } 
    })
}

const crearGenero = (data) =>{
    return axiosconfiguration.post('generos', data, {
        headers: {
          'Content-Type': 'aplication/json'
        } 
    })
}

const editarGenero = (tipoId, data) =>{
    return axiosconfiguration.put('generos/'+ tipoId, data, {
        headers: {
          'Content-Type': 'aplication/json'
        } 
    })
}

const borrarGenero = (tipoId, data) =>{
    return axiosconfiguration.delete('generos/'+ tipoId, {}, {
        headers: {
          'Content-Type': 'aplication/json'
        } 
    })
}

const obtenerGeneroPorId = (tipoId) =>{
    return axiosconfiguration.get('generos/'+ tipoId, {
        headers: {
          'Content-Type': 'aplication/json'
        } 
    })
}


export {
    obtenerGeneros, crearGenero, editarGenero, borrarGenero, obtenerGeneroPorId
}