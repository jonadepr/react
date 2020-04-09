import React, { Component } from 'react'

export class Lista extends Component {

    onClickBorrarHandler = id => {
        const {borrar} = this.props;
        borrar(id);
        console.log("Borrar "+id);
    }

    

    render() {
        const {elementos} = this.props;
        // const elementos = this.props.elementos
        return (
            <div className="lista">
                <ul>
                {
                    elementos.map(
                        e => <li>{e.name} 
                            <button onClick={()=>this.onClickBorrarHandler(e.id)}>Borrar</button>
                            </li>
                    )
                }
                </ul>
            </div>
        )
    }
}

export default Lista
