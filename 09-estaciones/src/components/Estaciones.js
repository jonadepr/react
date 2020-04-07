import React, { Component } from 'react'

export class Estaciones extends Component {

    // No necesita constructor
    estacion = null;

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


    _getEstacion = (latitude) => {

        // Haría los cálculos pertinentes 
        const mesDeHoy = new Date().getMonth() +1;
        // Verano en hemisferio norte 5-10 invierno 11-4
        const esVeranoEnElNorte = mesDeHoy>=5 && mesDeHoy <=10;

        if (esVeranoEnElNorte) {
            this.estacion = latitude>=0? "verano":"invierno"
        } else {
            this.estacion = latitude<0? "verano":"invierno"
        }

        // Vuelve a renderizar
        this.forceUpdate();
    }

    // Devuelve el elemento a pintar
    _getElements = () => {
        const clases = `${this.config[this.estacion].imagen} icon`;
        const resultado = (
            <div>
                <i className={clases}></i>
                <p>{this.config[this.estacion].texto}</p>
            </div>
        )
        return resultado;
    }


    render() {

        // Pedir la localización
        // Es asíncrona -> lo lanza y no espera respuesta
        // Cuando tenga la respuesta, ejecutará la función del primer
        // parámetro
        if (!this.estacion) {
            navigator.geolocation.getCurrentPosition(
                res => this._getEstacion(res.coords.latitude)
            );
        }

        return (
            <div className="estaciones">
                {!this.estacion ? <h1>Cargando...</h1> : this._getElements()}
            </div>
        )
    }


}

export default Estaciones
