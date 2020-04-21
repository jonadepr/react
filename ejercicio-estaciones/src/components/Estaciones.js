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

        console.log(latitude);


        // Haría los cálculos pertinentes 

        console.log("hago los cálculos pertinentes");
        // Verano en hemisferio norte 5-10 invierno 11-4

        let mes = new Date().getMonth()+1;
        if((latitude>0) && (mes>=5 && mes<=10)) // hemisfero norte y verano
            this.estacion = "verano";
        else this.estacion = "invierno";
        
        if(!((latitude>0) && (mes>=5 && mes<=10)))
        this.estacion = "invierno";
        else this.estacion = "verano";
        console.log(this.estacion);
        this.forceUpdate();

    }

    _getElements = () => {
        // if (est)
        // creo el componente con la información de this.estacion

        // <div></div>
        return <div>ya tengo la estación</div>;
    }


    render() {

        // Pedir la localización
        // Es asíncrona -> lo lanza y no espera respuesta
        // Cuando tenga la respuesta, ejecutará la función del primer
        // parámetro

        let mivariable;
        if(this.estacion === "verano")
            mivariable = "sun";
        else mivariable = "snowflake";


        if (!this.estacion) {
            navigator.geolocation.getCurrentPosition(
                res => this._getEstacion(res.coords.latitude)
                //, nook
            );
        }


        return (
            <div className="estaciones">
                {document.getElementsByClassName("estaciones").innerHTML=""}
                {!this.estacion ? <h1>Cargando</h1> : this._getElements()}
                {<i class={`${mivariable} icon`}></i>}
                {<p>Es {`${this.estacion}`}</p>}
            </div>
        )
    }


}

export default Estaciones
