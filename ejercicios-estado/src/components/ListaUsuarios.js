import React, { Component } from 'react'
import axios from 'axios';
import UsuarioCard from './UsuarioCard';
import './ListaUsuarios.css'

class ListaUsuarios extends Component {


    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(
                res => this.setState({users:res.data})
            ).catch(
                err => console.error("error en axios", err)
            );
    }

     modificaUsuario = (name) => {
        const {modificar} = this.props;
        modificar(name); 
        //console.log("ListaUsuarios ",name);
    } 

    render() {
        return (
            <div className="lista-cards">
                
                {
                this.state.users.map(
                            e =>
                                <UsuarioCard users={e}
                                modificar={this.modificaUsuario}
                                >
                                </UsuarioCard>
                        )
                }
            </div>
        )
    }
}

export default ListaUsuarios