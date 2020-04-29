import React, { Component } from 'react'
import ClientForm from '../components/ClientForm'
import Header from '../components/Header'

export class ClientCreate extends Component {
    render() {
        return (
            <div className="client-create">
                <Header texto={"Crear Cliente"}/>
                <ClientForm/>
            </div>
        )
    }
}

export default ClientCreate
