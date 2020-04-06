import React from 'react'
import './Title.css'
// con este import lo busca dentro de node-modules (sin ./)
import PropTypes from 'prop-types'

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

Title.propTypes = {
    titulo: PropTypes.string
}

export default Title;