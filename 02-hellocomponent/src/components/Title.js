import React from 'react'
import './Title.css'

const Title = () => {

    // en jsx siempre devolvemos un elemento, nunca 2
    // si el elemento lo vamos a escribir en varias líneas
    // envolvedlo en un paréntesis
    return (
        /*
            Una diferencia entre html y jsx es que cuando
            le damos la clase ponemos classname
        */
        <div className="title">
            <h1>Hola Componente</h1>
            <hr></hr>
        </div>
    )
}

export default Title;