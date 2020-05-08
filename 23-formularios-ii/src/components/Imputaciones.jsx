import React, { Component } from 'react'
import { BASE_API_URL } from '../config/config'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export class Imputaciones extends Component {




    constructor(props) {
        super(props);
        this.state = {
            concepto: "",
            importe: "",
            fecha: "",
            gastoIngreso: "",
            projectId: this.props.id
        }
        console.log("project form id ", this.props.id)
    }

    componentDidMount() {
        // me traigo el proyecto y los clientes si tengo un id, si es undefined no hago 
        // nada
        if (this.props.id) { console.log("id", this.props.id) }

    }

    onFechaChange = date => {
        this.setState({
            fecha: date
        })
    }

    onImporteChange = e => {
        this.setState(
            {
                importe: e.target.value
            }
        )
    }

    onConceptoChange = e => {
        this.setState(
            {
                concepto: e.target.value
            }
        )
    }

    onGIChange = e => {
        this.setState(
            {
                gastoIngreso: e.target.value
            }
        )
    }

    onSubmitClick = e => {
        e.preventDefault();
        const imputacion = {
            concepto: this.state.concepto,
            importe: this.state.importe,
            fecha: this.state.fecha,
            gastoIngreso: this.state.gastoIngreso,
            projectId: this.props.id,
        }


        if (this.props.id) {
            /*             axios.get(`${BASE_API_URL}/clients`)
                            .then(
                                res => {
                                    res.data.map(
                                        e => {
            
                                            if (String(e.id) === project.client) {
                                                project.client = e.description
                                                console.log("e.id", e.id)
                                                console.log("e.description", project.client)
                                                axios.put(`${BASE_API_URL}/projects/${this.props.id}`,
                                                    project).then(
                                                        res =>
                                                            this.setState({
                                                                redirect: true
                                                            })
                                                    ).catch(console.log)
            
                                            }
                                        })
                                }
                            ) */



        }
    }

    render() {
        return (
            <div className="project-form">
                <form className="ui form" >
                    <div className="field">
                        <label>Concepto</label>
                        <input type="text" name="concepto"
                            onChange={this.onConceptoChange}
                            value={this.state.concepto}
                            placeholder="Concepto" />
                    </div>
                    <div className="field">
                        <label>Importe</label>
                        <input type="number" name="importe"
                            value={this.state.importe}
                            onChange={this.onImporteChange}
                            placeholder="Importe" />
                    </div>
                    <div className="field">


                        <label>Fecha</label>
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            selected={this.state.fecha}
                            onChange={this.onFechaChange}
                        />
                    </div>

                    <div className="field">
                        <label>Gasto o ingreso</label>

                        <select onChange={this.onGIChange} value={this.state.gastoIngreso}>
                            <option value={0}>Gasto</option>
                            <option value={1}>Ingreso</option>
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

export default Imputaciones
