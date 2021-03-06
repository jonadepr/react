import React, { Component } from 'react'
import ListaCategorias from './ListaCategorias'
import Chiste from './Chiste'
import './ChuckNorrisJokes.css'
import axios from 'axios'
import Search from './Search'
import ListaChistes from './ListaChistes'


export class ChuckNorrisJokes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoria: "",
            chiste: null,
            filtro: "",
            listaChistes: []
        }
    }


    setCategoria = ( c ) => {
        this.setState(
            {
                categoria: c,
                listaChistes: []
            })
        this.updateChiste(c);
        /* this.updateLista(); */
    }

    updateChiste(c){
        if(c!=null)
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


    
    updateLista(q){
        if(q!=null)
        axios.get(`https://api.chucknorris.io/jokes/search?query=${q}`).then(
            res =>{
                this.setState({
                    listaChistes: res.data,
                })
                console.log(this.state.listaChistes)
            }
        ).catch(
            console.log
        )
    }


    filtra = (nuevoFiltro)  => {
        this.setState({
            filtro: nuevoFiltro,
            chiste: null
        });
        this.updateLista(nuevoFiltro);
        this.updateChiste(null);
    }

    render() {
        return (
            <div className="chucknorris">
                <Search changeSearch={this.filtra}/>
                <ListaCategorias setCategoria={this.setCategoria}/>
                <Chiste deletebutton={false} chiste={this.state.chiste} />
                <ListaChistes lista={this.state.listaChistes}/>
            </div>
        )
    }
}

export default ChuckNorrisJokes
