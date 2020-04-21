import React, { Component } from 'react'
import axios from 'axios'
import './Fotos.css'

export class Fotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imagenes: [],
            pagina: 1
        }
    }

    componentDidMount() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=valencia&client_id=S8ic8SNvlYvW2ZWpGTZCI09549rjVmsqh5SQMKfJkRM&client_secret=iGOdWbBVHINeso8xkiQ5Iyv7hj6pGZq2-SZvVHCO8ps").then(
            res => {
                this.setState(
                    {  
                        imagenes: res.data.results,
                    }
                )
            }
        )
    }


    changeNextPage = (e) => {
        axios.get("https://api.unsplash.com/search/photos?page="+this.state.pagina + 1+"&query=valencia&client_id=S8ic8SNvlYvW2ZWpGTZCI09549rjVmsqh5SQMKfJkRM&client_secret=iGOdWbBVHINeso8xkiQ5Iyv7hj6pGZq2-SZvVHCO8ps").then(
            res => {
                this.setState(
                    {  
                        imagenes: this.state.imagenes.concat(res.data.results),
                    }
                )
            }
        )
        
        this.setState({
            pagina: this.state.pagina + 1
        })
    }


    render() {
        console.log(this.state.imagenes);

        return (
            <>
            <div className="marco-fotos">
                {this.state.imagenes.map(
                            e => {
                                const apaisada = e.height < e.width;
                                const estilo = {
                                    gridColumn: `span ${apaisada?2:1}`
                                }
                                return <img alt={e.alt_description} key={e.id} src={e.urls.small} style={estilo}></img>
                            }
                        )}
            </div>
            <button onClick={this.changeNextPage}>Más</button>
            </>
        )
    }
}

export default Fotos
