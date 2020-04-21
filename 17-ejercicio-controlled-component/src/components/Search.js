import React, { Component } from 'react'

export class Search extends Component {


    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }

    onSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })
        // console.log("comparando variables", this.state.search, e.target.value )
        // this.props.changeSearch(e.target.value)
    }

    componentDidUpdate(){
        this.props.changeSearch(this.state.search);
    }

    shouldComponentUpdate(nextProps , nextState) {
        return nextState.search !== this.state.search
    }


    render() {
        // console.log("propiedades del search", this.props);
        return (
            <div className="search">
                <input name="search" type="text" value={this.state.search}
                    onChange={this.onSearchChange}></input>
            </div>
        )
    }
}

export default Search
