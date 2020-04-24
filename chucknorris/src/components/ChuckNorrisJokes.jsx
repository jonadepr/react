import React, { Component } from 'react'
import ListaCategorias from './ListaCategorias'
import Header from './Header'

export class ChuckNorrisJokes extends Component {
    render() {
        return (
            <div>
                <Header texto={"Lista de categorías de chistes de Chuck Norris"}/>
                <ListaCategorias />
            </div>
        )
    }
}

export default ChuckNorrisJokes
