import React, { Component } from 'react'
import axios from 'axios'
import './ListaCategorias.css'

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


    setCategoria= e =>{
        console.log("evento",e)
        this.props.setCategoria(e);
    }

    render() {
        return (
            <div className="lista-categorias">
                <table className="ui celled table">
                    <thead>
                        <tr><th>Categorías</th></tr>
                    </thead>
                    <tbody>
                        {this.state.categorias.map(
                            e => <tr key={e}>
                                <td  onClick={()=>this.setCategoria(e)} data-label="Name">{e}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListaCategorias
