import React, { Component } from 'react'
import './Search.css'

export class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    onSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    componentDidUpdate() {
        if (this.props.auto) {
            this._refreshTable()
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.search !== this.state.search
    }

    onSearchButtonClicked = e => {
        this._refreshTable();
    }

    onSearchInputKeyUp = e => {
        if (!this.props.auto && e.keyCode === 13) {
            this._refreshTable();
        }
    }

    _refreshTable = () => {
        this.props.changeSearch(this.state.search);
    }


    render() {

        const auto = this.props.auto;

        const botonBusqueda =
            <button className="ui active button" 
              onClick={this.onSearchButtonClicked}
            >
                <span>Buscar </span>
                <i className="search icon"></i>
            </button>

        console.log(auto);

        return (
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt" name="search" type="text" value={this.state.search}
                        onChange={this.onSearchChange}
                        onKeyUp={this.onSearchInputKeyUp}></input>
                    <i className="search icon"></i>
                </div>
                {auto ? null : botonBusqueda}
            </div>
        )
    }
}

export default Search
