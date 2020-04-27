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
        console.log(chisteG)
    }



    render() {
        if (this.props.chiste !== null)
            return (
                <>
                    <div className="chiste">
                        <div class="ui cards">
                            <div class="card">
                                <div class="content">
                                    <img class="right floated mini ui image" src={this.props.chiste.icon_url} />
                                    <div class="header">
                                        Chiste aleatorio categoría:
                                </div>
                                    <div class="meta">
                                        {this.props.chiste.categories}
                                    </div>
                                    <div class="description">
                                        {this.props.chiste.value}
                                    </div>
                                </div>
                                <div class="extra content">

                                    <div class="description">{this.props.chiste.updated_at}</div>
                                    <button className="ui primary button"
                                        onClick={this.onSubmitClick}>
                                        Guardar
                                    </button>
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
