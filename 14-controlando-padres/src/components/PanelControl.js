import React, { Component } from 'react'

export class PanelControl extends Component {


    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={()=>this.props.crearElemento()}>
                    Crea un nuevo elemento
                </button>
            </div>
        )
    }
}

export default PanelControl
