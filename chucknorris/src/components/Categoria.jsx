import React, { Component } from 'react'

export class Categoria extends Component {


    
    onClickHandler = e => {
        this.props.setCategoria(this.props.categoria);
    }

    render() {
        return (

            <tr key={this.props.categoria}>
                <td onClick={this.onClickHandler}>{this.props.categoria}</td>
            </tr>

        )
    }
}

export default Categoria
