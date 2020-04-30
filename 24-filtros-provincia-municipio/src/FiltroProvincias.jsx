import React, { Component } from 'react'
import axios from 'axios'

export class FiltroProvincias extends Component {


    constructor(props) {
        super(props);
        this.state = {
            provincias: [],
            provincia: "-1",
            municipios: []
        }
    }


    componentDidMount() {
        // axios
        // me tengo que traer las provincias
        axios.get(`http://localhost:4000/provincias`).then(
                res =>{
                    this.setState({
                        provincias: res.data
                    })
                    console.log("provincias", this.state.provincias)
                }
            ).catch(
                console.log
            )
        }
    

    onProvinciasChange = (e) => {
        // cuando cambie la provincia:
        // axios tiene que ir a por los municios de esa provincia
        console.log(e.target.value);//id de la provincia
        const id = e.target.value;
        // http://localhost:4000/municipios?provincia=1
        axios.get(`http://localhost:4000/municipios?provincia=${id}`).then(
            res =>{
                this.setState({
                    provincia: id,
                    municipios: res.data
                })
                console.log("municipios", this.state.municipios)
            }
        ).catch(
            console.log
        )

    }


    render() {
        return (
            <div>
              <div>
               Provincias:
               <select onChange={this.onProvinciasChange} value={this.state.provincia}>
                   {this.state.provincias.map(
                       e => 
                   <option value={e.id}>{e.nombre}</option>)}
               </select>
               </div> 
               <div>
               Municipios:
               <select disabled={this.state.provincia<0?true:false}>
                   {this.state.municipios.map(
                       e => 
                   <option value={e.id}>{e.nombre}</option>)}
               </select>
               </div>
            </div>
        )
    }
}

export default FiltroProvincias
