import React from 'react'
import './Usuario.css'

const Usuario = (props) => {


    const user = ( props.user ? props.user : {});

   // const user = props.user || {};

    return (
        <div className="usuario">
            <div>{user.usuario}:</div>
            <ul>
                <li>{user.nombre} {user.apellido}</li>
                <li>Edad: {user.edad}</li>
            </ul>
        </div>
    )
}

export default Usuario
