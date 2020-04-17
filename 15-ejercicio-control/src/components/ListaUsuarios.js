import React, { Component } from 'react'
import axios from 'axios'
import UsuarioCard from './UsuarioCard'
import './ListaUsuarios.css'

export class ListaUsuarios extends Component {


    constructor(props) {
        super(props);
        this.state = {
            usuarios : []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.setState(
                    {
                        usuarios: res.data
                    }
                )
            })
            
    }

    render() {
        //console.log(this.state.usuarios);
        return (
            <div className="lista-usuarios">
                <div className="ui link cards">
                {
                    this.state.usuarios.map(
                        item => <UsuarioCard changeUser={this.props.changeUser}
                         usuario={item}/>
                    )
                }
                </div>
            </div>
        )
    }
}

export default ListaUsuarios
