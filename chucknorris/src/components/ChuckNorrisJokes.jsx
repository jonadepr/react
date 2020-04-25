import React, { Component } from 'react'
import ListaCategorias from './ListaCategorias'
import Chiste from './Chiste'
import './ChuckNorrisJokes.css'

export class ChuckNorrisJokes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoria: "animal"
        }
    }


    setCategoria = ( e ) => {
        console.log("Cambiando categoria a", e );
        this.setState(
            {
                categoria: e
            })
    }

    render() {
        return (
            <div className="chucknorris">
                <ListaCategorias setCategoria={this.setCategoria}/>
                <Chiste categoria={this.state.categoria} />
            </div>
        )
    }
}

export default ChuckNorrisJokes
