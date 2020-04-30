import React, { Component } from 'react'
import axios from 'axios'
import './Fotos.css'


export class Fotos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imagenes: [],
            pagina: 1,
            search: this.props.filtro
        }
    }

    componentDidMount() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=valencia&client_id={Key_id}&client_secret={key_secret}}").then(
            res => {
                this.setState(
                    {  
                        imagenes: res.data.results,
                    }
                )
            }
        )
    }


    componentDidUpdate(){
        
        console.log("Frase cambiada",this.props.filtro); 
    }

    changeFiltro() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query="+this.props.filtro+"&client_id=S8ic8SNvlYvW2ZWpGTZCI09549rjVmsqh5SQMKfJkRM&client_secret=iGOdWbBVHINeso8xkiQ5Iyv7hj6pGZq2-SZvVHCO8ps").then(
            res => {
                this.setState(
                    {  
                        frase: this.props.filtro
                    }
                )
            }
        )
        //console.log(this.props.search);

    }


    changeNextPage = (e) => {
        axios.get("https://api.unsplash.com/search/photos?page="+this.state.pagina + 1+"&query=valencia&client_id=S8ic8SNvlYvW2ZWpGTZCI09549rjVmsqh5SQMKfJkRM&client_secret=iGOdWbBVHINeso8xkiQ5Iyv7hj6pGZq2-SZvVHCO8ps").then(
            res => {
                this.setState(
                    {  
                        imagenes: this.state.imagenes.concat(res.data.results),
                        pagina: this.state.pagina + 1
                    }
                )
            }
        )
    }


    render() {
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
