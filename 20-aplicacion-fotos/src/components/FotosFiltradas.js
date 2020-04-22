import React, { Component } from 'react'
import SearchFotos from './SearchFotos'
import Fotos from './Fotos';

export class FotosFiltradas extends Component {


    constructor(props) {
        super(props);
        this.state = {
            search : ""
        }
    }

    changeSearchPhrase = (nuevaFrase) => {
        this.setState({
            search: nuevaFrase
        })
    }




    render() {
        return (
            <div className="tabla-filtrada">
                <SearchFotos changeSearch = {this.changeSearchPhrase} />
                <Fotos filtro={this.state.search}></Fotos>
            </div>
        )
    }
}

export default FotosFiltradas