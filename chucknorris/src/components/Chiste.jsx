import React, { Component } from 'react'
import "./Chiste.css"
export class Chiste extends Component {


    render() {
        if(this.props.chiste!==null)
        return (
            <div className="chiste">
                <div class="ui cards">
                    <div class="card">
                        <div class="content">
                            <img class="right floated mini ui image" src={this.props.chiste.icon_url}/>
                                <div class="header">
                                    Chuck Norris Jokes
                                </div>
                                <div class="meta">
                                    {this.props.chiste.categories}
                                </div>
                                <div class="description">
                                {this.props.chiste.value}
                                </div>
                                </div>
                            <div class="extra content">
                                
                                    <div class="description">{this.props.chiste.updated_at}</div>
                               
                            </div>
                        </div>
                    </div>
                    </div>
        )
        else return null
    }
}

export default Chiste
