import React, { Component } from 'react'
import Header from '../components/Header'
import ClientCard from '../components/ClientCard'
import axios from 'axios'
import {BASE_API_URL} from '../config/config'

export class ClientView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: ""
        }
    }

    componentDidMount(){
        axios.get(`${BASE_API_URL}/clientes/${this.props.match.params.id}/`).then(
            res =>
                this.setState({
                    nombre: res.data.nombre
                })
        ).catch(
            console.log
        )
    }


    render() {
        //console.log(this.state);

        if (this.props.match.params.id !== "new")
        return (
            <div>
                <Header texto={"Vista del cliente "+this.state.nombre}/>
                <ClientCard card={this.state}/>
            </div>
        )

        else return null
    }
}

export default ClientView
