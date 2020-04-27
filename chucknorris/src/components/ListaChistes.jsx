import React, { Component } from 'react'
import "./ListaChistes.css"
import Chiste from './Chiste'

export class ListaChistes extends Component {
    render() {
        
        if(this.props.lista.total !== undefined)
        return (
            <div className="listachistes" key={this.props.lista.value}>
                Total {this.props.lista.total}
                {" "}chistes: {
                    this.props.lista.result.map(
                        chis => <Chiste chiste={chis} />

                    ) 
                }
            </div>
        )
        else return null
    }
}

export default ListaChistes
