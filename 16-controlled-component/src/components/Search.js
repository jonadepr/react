import React, { Component } from 'react'

export class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
            search : ""
        }
    }

    onChangeHandler = (e) => {
        this.setState(
            {
                //search: e.target.value.toUpperCase()
                search: e.target.value
            }
        )
    }


    render() {
        return (
            <div className="search">
                
                <input 
                    type="text" name="search" 
                    value={this.state.search}
                    onChange={this.onChangeHandler}
                    >
                </input>
                <div>
                    Contenido: {this.state.search}
                </div>

            </div>
        )
    }
}

export default Search
