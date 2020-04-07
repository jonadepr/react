import React, { Component } from 'react'

export class Estaciones extends Component {

    // No necesita constructor

    config = {
        "verano": {
            texto: "Es verano",
            imagen: "sun"
        },
        "invierno": {
            texto: "Es invierno",
            imagen: "snowflake"
        },
        
    }


    _getEstacion = () => {
        // Pedir la localización


        // Haría los cálculos pertinentes 

        // Verano en hemisferio norte 5-10 invierno 11-4


        return  // "verano" "invierno"
    }


    render() {

        // Pedir si es verano o es invierno


        return (
            <div className="estaciones">
                <i class={`${mivariable} icon`}></i>
                {/* poner en mensaje */}
            </div>
        )
    }


}

export default Estaciones
