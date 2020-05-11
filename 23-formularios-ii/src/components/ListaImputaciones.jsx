import React, { Component } from 'react'
import { BASE_API_URL } from '../config/config'
import axios from 'axios'
import './ListaImputaciones.css'
import Chart from "./Chart"
export class ListaImputaciones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gastos: [],
            ingresos: [],
            saldo: 0
        }
        console.log("project form id ", this.props.id)
    }

    componentDidMount() {
        // Me traigo la lista de imputaciones del proyecto 
        // this.props.id y lo meto en gastos e ingresos
        // http://localhost:4000/imputaciones?projectId=1
        const gastosu = []
        const ingresosu = []

        axios.get(
            `${BASE_API_URL}/imputaciones?projectId=${this.props.id}`).then(
                res => {
                    res.data.map(
                        e => {
                            if (e.gastoIngreso === "gasto")
                                gastosu.push(e)
                            else ingresosu.push(e)
                            return null
                        }
                    )
                    this.setState({
                        gastos: gastosu,
                        ingresos: ingresosu
                    })
                    console.log("gastos", gastosu)
                    console.log("ingresos", ingresosu)
                    const gasto = gastosu.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
                    const ingreso = ingresosu.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
                    console.log("saldo", ingreso - gasto)
                    this.setState({
                        saldo: ingreso - gasto
                    })

                }
            )
    }



    changeToIngresos = (elemento) => {
        console.log("imputacion", elemento) // en elemento tengo el elemento a cambiar a ingresos
        elemento.gastoIngreso = "ingreso"
        axios.put(`${BASE_API_URL}/imputaciones/${elemento.id}`,
            elemento).then(
                res => {
                    const ingresosNuevo = this.state.ingresos
                    //console.log("elemento cambiado", elemento)
                    const gastosNuevo = []
                    this.state.gastos.map(
                        e => {
                            e.gastoIngreso === "ingreso" ?
                                ingresosNuevo.push(e) : gastosNuevo.push(e)
                            return null
                        }
                    )
                    console.log("ingresosNuevo", ingresosNuevo)

                    const gasto = gastosNuevo.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
                    const ingreso = ingresosNuevo.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
                    this.setState({
                        ingresos: ingresosNuevo,
                        gastos: gastosNuevo,
                        saldo: ingreso - gasto
                    })
                }
            )
    }


    changeToGastos = (elemento) => {
        console.log("imputacion", elemento) // en elemento tengo el elemento a cambiar a ingresos
        elemento.gastoIngreso = "gasto"
        axios.put(`${BASE_API_URL}/imputaciones/${elemento.id}`,
            elemento).then(
                res => {
                    const gastosNuevo = this.state.gastos
                    //console.log("elemento cambiado", elemento)
                    const ingresosNuevo = []
                    this.state.ingresos.map(
                        e => {
                            e.gastoIngreso === "gasto" ?
                                gastosNuevo.push(e) : ingresosNuevo.push(e)
                            return null
                        }
                    )

                    const gasto = gastosNuevo.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
                    const ingreso = ingresosNuevo.reduce((acc, actual) => acc + parseFloat(actual.importe), 0)
                    this.setState({
                        ingresos: ingresosNuevo,
                        gastos: gastosNuevo,
                        saldo: ingreso - gasto
                    })
                }
            )
    }



    render() {
        return (
            <>
                <div>
                    Cuenta del proyecto {this.props.id}
                </div>
                <div className="containertablas">
                    <table className="ui celled table unstackable">
                        <thead>
                            <tr><th>Ingresos</th>
                            </tr></thead>
                        <tbody>

                            {this.state.ingresos.map
                                (e =>
                                    <tr key={e.id}>
                                        <td data-label="Ingresos">{e.concepto}{": "}{e.importe}
                                            <i onClick={() => this.changeToGastos(e)} className="angle right icon"></i></td>
                                    </tr>
                                )}

                        </tbody>
                    </table>

                    <table className="ui celled table unstackable">
                        <thead>
                            <tr><th>Gastos</th>
                            </tr></thead>
                        <tbody>

                            {this.state.gastos.map
                                (e =>
                                    <tr key={e.id}>
                                        <td data-label="Gastos">
                                            <i onClick={() => this.changeToIngresos(e)}
                                                className="angle left icon"></i>
                                            {e.concepto}{": "}{e.importe}</td>
                                    </tr>
                                )}

                        </tbody>
                    </table>
                </div>
                {console.log("LE PASO", this.state.ingresos)}
                <div> SALDO TOTAL:{" "} {this.state.saldo}</div>
                <Chart ingresos={this.state.ingresos} gastos={this.state.gastos}></Chart>

            </>
        )
    }
}

export default ListaImputaciones
