import React, { Component } from 'react'
import axios from 'axios'

export class Fotos extends Component {


    componentDidMount() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=valencia&client_id=key&client_secret=secret").then(
            res => console.log(res)
        )
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Fotos
