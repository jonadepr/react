import React from 'react'
import './Usuario.css'

const Usuario = (props) => {

    console.log(props);

    // inserto un sufijo
    const miusuario = props.user;

    return (
        <div className="usuario">
            Usuario: {miusuario.user}
            <br></br>
            Nombre: {miusuario.nombre}
            <br></br>
            Apellido: {miusuario.apellido}
            <br></br>
            Edad: {miusuario.edad}
        </div>
    )
}

export default Usuario;