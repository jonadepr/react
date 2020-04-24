import React, { Component } from 'react'
import ListaCategorias from './ListaCategorias'
import Header from './Header'
import Chiste from './Chiste'

export class ChuckNorrisJokes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoria: "animal"
        }
    }


    setCategotia=(c)=>{
        console.log("Cambiando categoria a ", c)
        this.setState(
            {
                categoria: c
            })
    }

    render() {
        return (
            <div className="chucknorris">
                <Header texto={"Lista de categorías de chistes de Chuck Norris"}/>
                <ListaCategorias categoria={this.state.categoria} setCategoria={this.setCategoria}/>
                <Chiste categoria={this.state.categoria} />
            </div>
        )
    }
}

export default ChuckNorrisJokes
