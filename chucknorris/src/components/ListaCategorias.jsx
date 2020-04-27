import React, { Component } from 'react'
import axios from 'axios'
import './ListaCategorias.css'
import Categoria from './Categoria'

export class ListaCategorias extends Component {


    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
        }
    }


    componentDidMount() {
        axios.get(`https://api.chucknorris.io/jokes/categories`).then(
            res =>
                this.setState({
                    categorias: res.data
                })
        ).catch(
            console.log
        )
    }


    render() {
        return (
            <div className="lista-categorias">
                <table className="ui celled table unstackable">
                    <thead>
                        <tr><th>Categorías</th></tr>
                    </thead>
                    <tbody>
                    {this.state.categorias.map(
                        e => <Categoria setCategoria={this.props.setCategoria} 
                        categoria={e} 
                        />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListaCategorias
