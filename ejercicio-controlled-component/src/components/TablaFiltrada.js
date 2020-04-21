import React, { Component } from 'react'
import Search from './Search';
import TablaPosts from './TablaPosts';

export class TablaFiltrada extends Component {


    constructor(props){
        super(props);
        this.state={
            title : ""
        }
    }


    changePhrase=(nuevafrase)=>{
        this.setState({
            title: nuevafrase
        })
    }


    render() {
        return (
            <div>
            <Search changePhrase ={this.changePhrase}></Search>   
            <TablaPosts titulo={this.state.title}></TablaPosts>
            </div>
        )
    }
}

export default TablaFiltrada
