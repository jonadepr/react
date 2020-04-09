import React, { Component } from 'react'
import './Parent.css'

export class Parent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            mensaje: "",
            textoBoton: "Púlsame",
            vecesPulsado: 0,
            claseMensaje: "",
            mostrarCuadrado: false
        }
    }

    onClickButtonHandler = (e) => {
        this.setState({
            mensaje: `Pulsado ${this.state.vecesPulsado + 1} veces`,
            textoBoton: "Vuelve a pulsarme",
            vecesPulsado: this.state.vecesPulsado + 1
        })
    }

    onMouseEnterMessageHandler = (e) => {
        this.setState({
            claseMensaje: "emphasis"
        })
    }

    onMouseLeaveMessageHandler = (e) => {
        this.setState({
            claseMensaje: ""
        })
    }

    onClickMostrarCuadradoHandler = (e) => {
        this.setState(
            {
                mostrarCuadrado : this.state.mostrarCuadrado ? false: true
            }
        )
    }

    render() {
        return (
            <div className="parent">
                <div onMouseEnter={this.onMouseEnterMessageHandler}
                    onMouseLeave={this.onMouseLeaveMessageHandler}
                    className={this.state.claseMensaje}>{this.state.mensaje}</div>
                <button onClick={this.onClickButtonHandler}>
                    {this.state.textoBoton}
                </button>
                {
                    this.state.mostrarCuadrado ?
                        <div className="square">
                        </div>
                        :
                        null
                }
                <button onClick={this.onClickMostrarCuadradoHandler}>MostrarCuadrado</button>

            </div>
        )
    }
}

// Al pulsar el botón el mensaje se cambie a pulsame

export default Parent
