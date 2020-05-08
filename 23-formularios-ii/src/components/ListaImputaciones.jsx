import React, { Component } from 'react'
import { BASE_API_URL } from '../config/config'
import axios from 'axios'

export class ListaImputaciones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gastos: [],
            ingresos: [],
            saldo: 0
        }
        //console.log("project form id ", this.props.id)
    }

    componentDidMount() {
        // Me traigo la lista de imputaciones del proyecto 
        // this.props.id y lo meto en gastos e ingresos
        // http://localhost:4000/imputaciones?projectId=1
        const gastosu = []
        const ingresosu = []

        axios.get(
            `${BASE_API_URL}/imputaciones?projectID=${this.props.id}`).then(
                res => {
                    res.data.map(
                        e => {
                            if (e.gastoIngreso === "gasto")
                                gastosu.push(e)
                            else ingresosu.push(e)
                        }
                    )
                    this.setState({
                        gastos: gastosu,
                        ingresos: ingresosu
                    })
                    console.log("gastos", gastosu)
                    console.log("ingresos", ingresosu)
                    const gasto = gastosu.reduce( (acc, actual) => acc + parseFloat(actual.importe), 0 )
                    const ingreso = ingresosu.reduce( (acc, actual) => acc + parseFloat(actual.importe), 0 )
                    console.log("saldo",ingreso-gasto)
                    this.setState({
                        saldo: ingreso-gasto
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
                <table class="ui celled table unstackable">
                    <thead>
                        <tr><th>Ingresos</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            {this.state.ingresos.map
                            (e =>
                            <td data-label="Ingresos">{e.concepto}{": "}{e.importe}</td>
                            )}
                        </tr>
                    </tbody>
                </table>

                <table class="ui celled table unstackable">
                    <thead>
                        <tr><th>Gastos</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            {this.state.gastos.map
                            (e =>
                            <td data-label="Gastos">{e.concepto}{": "}{e.importe}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
                            <div>SALDO TOTAL: {this.state.saldo}</div>
            </>
        )
    }
}

export default ListaImputaciones
