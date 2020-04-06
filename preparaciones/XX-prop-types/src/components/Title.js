import React from 'react'
import './Title.css'
import PropTypes from 'prop-types'



const Title = (props) => {

    // npm install prop-types --save

    
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