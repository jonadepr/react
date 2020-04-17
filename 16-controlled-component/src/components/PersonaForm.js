import React, { Component } from 'react'

export class PersonaForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            edad: ""
        }
    }

    onNombreChangeHandler = e => {
        this.setState({
            nombre: e.target.value.toUpperCase()
        })
    }

    onApellidoChangeHandler = e => {
        this.setState({
            apellido: e.target.value.toUpperCase()
        })
    }

    onEdadChangeHandler = e => {
        if (parseInt(e.target.value) >0) {
            this.setState({
                edad: e.target.value
            })
        }
    }

    onTextInputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        console.log(this.state);
        return (
            <div className="persona-form">
                Nombre: <input name="nombre" type="text" value={this.state.nombre}
                    onChange={this.onNombreChangeHandler} ></input><br />
                Apellido: <input name="apellido" type="text" value={this.state.apellido}
                    onChange={this.onApellidoChangeHandler}></input><br />
                Edad: <input name="edad" type="number" value={this.state.edad}
                    onChange={this.onEdadChangeHandler}></input><br />
            </div>
        )
    }
}

export default PersonaForm
