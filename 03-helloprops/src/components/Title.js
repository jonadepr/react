import React from 'react'
import './Title.css'

const Title = (props) => {

    console.log(props);

    /**
     * Mi objeto de propiedades es de la forma:
     * {titulo: "Welcome properties"}
     */

    // inserto un sufijo
    const minuevotitulo = `${props.titulo}!!!`

    return (
        <div className="title">
            <h1>{minuevotitulo}</h1>
            <hr></hr>
        </div>
    )
}

export default Title;