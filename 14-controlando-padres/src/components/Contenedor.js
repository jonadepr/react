import React, { Component } from 'react'
import Lista from './Lista'
import PanelControl from './PanelControl'
import faker from 'faker'

export class Contenedor extends Component {


    constructor(props) {
        super(props);
        this.state ={
            elementos: [{
                id: 0,
                name: faker.name.firstName()
            }]
        }
    }

    createRandomElement = () => {
        // Poner el id
        const nuevoElemento = {
            name: faker.name.firstName(),
            id: faker.random.uuid()
        };
        const nuevaLista = this.state.elementos;
        nuevaLista.push(nuevoElemento);
        // const nuevaLista = [...this.state.elementos, nuevoElemento]
        this.setState({
            elementos: nuevaLista
        })
    }

    deleteElement = (id) => {
        this.setState(
            {
                elementos: this.state.elementos.filter(
                    e=> e.id !== id
                )
            }
        )
    }

    render() {
        return (
            <div className="contenedor">
                <PanelControl crearElemento = 
                    {this.createRandomElement}>
                </PanelControl>
                <Lista elementos={this.state.elementos}
                        borrar={this.deleteElement}
                    ></Lista>
            </div>
        )
    }
}

export default Contenedor
