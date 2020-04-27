import React, { Component } from 'react'
import "./Chiste.css"
import axios from 'axios'


export class Chiste extends Component {



    onSubmitClick = e => {
        e.preventDefault();
        const chisteG = {
            categories: this.props.chiste.categories,
            created_at: this.props.chiste.created_at,
            icon_url: this.props.chiste.icon_url,
            id: this.props.chiste.id,
            updated_at: this.props.chiste.updated_at,
            url: this.props.chiste.url,
            value: this.props.chiste.value,

        }
        axios.post(`http://localhost:4000/chistes`, chisteG).then(
            res =>
                window.prompt("GUARDADO")
        ).catch(console.log)
        //console.log(chisteG)
    }


    
    onBorrarClick = id => {
        console.log("elemento a borrar", id)
        axios.delete(`http://localhost:4000/chistes/${id}/`).then(
            res => {
                console.log(res);
                window.location.reload();
            }
        ).catch(console.log)
    }


    render() {
        if (this.props.chiste !== null)
            return (
                <>
                    <div className="chiste">
                        <div className="ui cards">
                            <div className="card">
                                <div className="content">
                                    <img className="right floated mini ui image" src={this.props.chiste.icon_url} alt={this.props.chiste.icon_url} />
                                    <div className="header">
                                        Chiste categoría:
                                </div>
                                    <div className="meta">
                                        {this.props.chiste.categories}
                                    </div>
                                    <div className="description">
                                        {this.props.chiste.value}
                                    </div>
                                </div>
                                <div className="extra content">

                                    <div className="description">{this.props.chiste.updated_at}</div>
                                    <button className="ui primary button"
                                        onClick={this.onSubmitClick}>
                                        Guardar
                                    </button>
                                    {this.props.deletebutton?
                                        (<button className="ui primary red button"
                                        onClick={() => this.onBorrarClick(this.props.chiste.id)}>
                                        Borrar
                                        </button>):null}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        else return null
    }
}

export default Chiste
