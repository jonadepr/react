import React from 'react'
import './Persona.css'

const Persona = (props) => {

    const persona = props.p;

    return (
        <div className="persona">
            <img src={persona.avatar} alt={persona.nombre}></img>
            <ul>
            <li>Nombre y apellido: <span>{persona.nombre} {persona.apellido}</span></li>
            <li>{persona.telefono}</li>
            <li>Edad: {persona.edad}</li>
            </ul>
        </div>
    )
}

export default Persona
