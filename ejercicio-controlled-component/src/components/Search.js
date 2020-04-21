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
                search: e.target.value
            }
        )
        this.props.changePhrase(e.target.value);
    }



    render() {
        return (
            <div className="search">
                <input
                    type="text" name="search"
                    value={this.state.search}
                    onChange={this.onChangeHandler}>
                </input>
            </div>
        )
    }
}

export default Search
