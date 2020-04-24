import React, { Component } from 'react'
import axios from 'axios'

export class ListaCategorias extends Component {


    constructor(props) {
        super(props);
        this.state = {
            categorias: []
        }
    }


    componentDidMount() {
        axios.get(`https://api.chucknorris.io/jokes/categories`).then(
            res => {
                this.setState({
                    categorias: res.data
                })
                console.log(this.state.categorias);
            }
        ).catch(
            console.log
        )
    }


    render() {
        return (
            <div>
                {this.state.categorias.map(
                    e => <il>
                        <div className="lista-categorias">
                            
                            <button>
                                <i className="icon green eye"></i>
                                        Joke {e}
                                        </button>
                        </div>
                    </il>
                )
                }
            </div>
        )
    }
}

export default ListaCategorias
