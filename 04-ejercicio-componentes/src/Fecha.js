import React from 'react'
import './Fecha.css'

const Fecha = () => {
    // Aquí javascript el que queramos, también más 
    // adelante veremos como incorporar JSX

    // esto es un elemento de javascript
    const fechaDelDia = new Date();


    // Return devuelve un component JSX
    // JSX tiene el template pattern, esto es, funciona 
    // como una plantilla. Para tener elemenos de javascript
    // hay que 'incrustarlos' con llaves{}
    return (
        <div className="fecha">
            {fechaDelDia.toLocaleDateString()}
        </div>
    )
}

export default Fecha
