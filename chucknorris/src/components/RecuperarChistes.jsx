import React, { Component } from 'react'
import ListaChistes from './ListaChistes'
import axios from 'axios'

export class RecuperarChistes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaChistes: []
        }
    }


    componentDidMount(){
            axios.get(`http://localhost:4000/chistes`).then(
                res =>{
                    this.setState({
                        listaChistes: {"total": res.data.length, "result": res.data},
                    })
                    console.log("lista",this.state.listaChistes)
                }
            ).catch(console.log)
        
    }



    render() {
        return (
            <div>
                <ListaChistes lista={this.state.listaChistes}/>
            </div>
        )
    }
}

export default RecuperarChistes
