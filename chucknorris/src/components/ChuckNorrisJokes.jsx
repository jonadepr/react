import React, { Component } from 'react'
import ListaCategorias from './ListaCategorias'
import Chiste from './Chiste'
import './ChuckNorrisJokes.css'
import axios from 'axios'

export class ChuckNorrisJokes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoria: "",
            chiste: null
        }
    }


    setCategoria = ( c ) => {
        this.setState(
            {
                categoria: c
            })
        this.updateChiste(c);
    }

    updateChiste(c){
        axios.get(`https://api.chucknorris.io/jokes/random?category=${c}`).then(
            res =>{
                this.setState({
                    chiste: res.data,
                })
            }
        ).catch(
            console.log
        )
    }


    render() {
        return (
            <div className="chucknorris">
                <ListaCategorias setCategoria={this.setCategoria}/>
                <Chiste chiste={this.state.chiste} />
            </div>
        )
    }
}

export default ChuckNorrisJokes
