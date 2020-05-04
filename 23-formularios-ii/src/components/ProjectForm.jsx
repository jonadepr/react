import React, { Component } from 'react'
import { BASE_API_URL } from '../config/config'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export class ProjectForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            code: "",
            description: "",
            client: "",
            redirect: false,
            clientes: []
        }
        console.log("project form id ", props.id)
    }

    componentDidMount() {
        // me traigo el proyecto y los clientes si tengo un id, si es undefined no hago 
        // nada
        if (this.props.id) {
            axios.get(`${BASE_API_URL}/projects/${this.props.id}`).then(
                res => {
                    this.setState(
                        {
                            code: res.data.code,
                            description: res.data.description,
                            client: res.data.client
                        }
                    )
                }
            )
        }
        axios.get(`${BASE_API_URL}/clients`).then(
            res => {
                this.setState(
                    {
                        clientes: res.data
                    }

                )
                console.log("clientes", res.data)
            }
        )

        console.log("clientes", this.state.clientes)

    }

    onClientesChange = e => {
        this.setState(
            {
                client: e.target.value
            }
        )
    }

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
    }

    onSubmitClick = e => {
        e.preventDefault();
        const project = {
            code: this.state.code,
            description: this.state.description,
            client: this.state.client
        }

        // ACTUALIZAR client de project
        /** Cuando estéis grabando el id del cliente, 
         * para que se muestre el nombre del cliente en la lista de proyectos 
         * (ahora estaría el id) podéis usar algo parecido a lo que hicimos en 
         * el ejercicio 15-ejercicio-control
        */

        if (this.props.id) { //no undefined modificar
            axios.put(`${BASE_API_URL}/projects/${this.props.id}`,
                project).then(
                    res =>
                        this.setState({
                            redirect: true
                        })
                ).catch(console.log)
        } else { //undefined nuevo poryecto

            Promise.all([
                axios.post(`${BASE_API_URL}/projects`, project),
                axios.get(`${BASE_API_URL}/clients`)
            ]).then(
                res => {
                this.setState({
                    redirect: true
                })
                
                res[1].data.map(
                    e => {
                        
                        if (e.id == project.client) {
                            project.client = e.description
                            console.log("e.id", e.id)
                            console.log("e.description", e.description)
                        }

                    })}
            ).catch(console.log)

            console.log("proyecto nuevo o editado", project)
        }
    }


    render() {
        return (
            <div className="project-form">
                {/* {this.state.redirect ? <Redirect to="/projects" /> : null} */}
                {this.state.redirect && <Redirect to="/projects" />}
                <form className="ui form" >
                    <div className="field">
                        <label>Ćodigo de proyecto</label>
                        <input type="text" name="code"
                            onChange={this.onCodeChange}
                            value={this.state.code}
                            placeholder="Código de proyecto" />
                    </div>
                    <div className="field">
                        <label>Descripción</label>
                        <input type="text" name="description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                            placeholder="Descripción" />
                    </div>
                    <div className="field">
                        <label>Cliente</label>

                        <select onChange={this.onClientesChange} value={this.state.client}>
                            <option value={-1}>Selecciona un cliente...</option>
                            {
                                this.state.clientes.map(
                                    e => <option key={e.id} value={e.id}> {e.description}</option>
                                )
                            }
                        </select>
                    </div>

                    <Link to="/projects/" className="ui red button">
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

export default ProjectForm
