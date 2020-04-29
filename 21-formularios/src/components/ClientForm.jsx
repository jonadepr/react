import React, { Component } from 'react'
import { BASE_API_URL } from '../config/config'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export class ClientForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            redirect: false
        }
    }

    onClientChange = e => {
        this.setState(
            {
                nombre: e.target.value
            }
        )
    }
/* 
    onDescriptionChange = e => {
        this.setState(
            {
                description: e.target.value
            }
        )
    }

    onCodeChange = e => {
        this.setState(
            {
                code: e.target.value
            }
        )
    } */

    // onTextInputChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    onSubmitClick = e => {
        e.preventDefault();
        const cliente = {
            nombre: this.state.nombre,
        }
        axios.post(`${BASE_API_URL}/clientes`, cliente).then(
            res =>
                this.setState({
                    redirect: true
                })
        ).catch(console.log)
        console.log(cliente)
    }


    render() {
        return (
            <div className="client-form">
                {/* {this.state.redirect ? <Redirect to="/projects" /> : null} */}
                {this.state.redirect && <Redirect to="/clientes" /> }
                <form className="ui form" >
                    <div className="field">
                        <label>Nombre de cliente</label>
                        <input type="text" name="nombre"
                            onChange={this.onClientChange}
                            value={this.state.nombre}
                            placeholder="Nombre de cliente" />
                    </div>
                    {/* <div className="field">
                        <label>Descripción</label>
                        <input type="text" name="description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                            placeholder="Descripción" />
                    </div>
                    <div className="field">
                        <label>Cliente</label>
                        <input type="text" name="client"
                            value={this.state.client}
                            onChange={this.onClientChange}
                            placeholder="Cliente" />
                    </div>
 */}
                    <Link to="/clientes/" className="ui red button">
                        <i className="icon close"></i>
                        Cancelar
                </Link>
                    <button className="ui primary button"
                        onClick={this.onSubmitClick}
                        type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default ClientForm
