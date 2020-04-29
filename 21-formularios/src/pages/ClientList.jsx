import React, { Component } from 'react'
import ClientsTable from '../components/ClientsTable'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {BASE_API_URL} from '../config/config'
import Header from '../components/Header'

export class ClientList extends Component {



    constructor(props) {
        super(props);
        this.state = {
            clientes: []
        }
    }

    componentDidMount() {
        axios.get(`${BASE_API_URL}/clientes`).then(
            res =>
                this.setState({
                    clientes: res.data
                })
        ).catch(
            console.log
        )
    }

    render() {
        return (
            <div className="client-list">
                <Header texto={"Lista De Clientes"}/>
                 <Link to="/clientes/new" className="ui basic button">
                    <i className="icon plus"></i>
                        Nuevo Cliente
                </Link> 
                <ClientsTable items={this.state.clientes} />
            </div>
        )
    }
}

export default ClientList