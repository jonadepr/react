import React, { Component } from 'react'
import './Page.css'

export class Page extends Component {

    // Iniciar el estado
    // podemos iniciarlo con "light"

    constructor(props) {
        super(props);
        this.state = {
            page: "light"
        }
    }

    onClickChangeColorLight = () =>{
        this.setState({
            page: "light"
        })
        console.log(this.state.page)
    } 

    onClickChangeColorDark = () =>{
        this.setState({
            page: "dark"
        })
        console.log('dark')
    } 


    onClickChangeColorAlto = () =>{
        this.setState({
            page: "alto"
        })
        console.log("alto contraste")
    }


    // función de onbuttonclick

    render() {
        console.log("render")
        return (
            // el classname de la página tiene que venir del estado
            <div className={this.state.page}>
                <div>
                     {/* el estado cambiará en onclick */}
                    <button onClick={this.onClickChangeColorLight}>light</button>
                    <button onClick={this.onClickChangeColorDark}>dark</button>
                    <button onClick={this.onClickChangeColorAlto}>alto contraste</button>
                </div>
                <h1>titulo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla unde ea delectus pariatur corrupti adipisci dolorem dolore eos, id doloribus alias facilis sint perferendis necessitatibus odio commodi harum quia!</p>
            </div>
        )
    }
}

export default Page
