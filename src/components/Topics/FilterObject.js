import React, { Component } from 'react';

export default class FilterObject extends Component {
    render () {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Evens and Odds </h4>
                <span className="puzzleText"></span>
                <input className="inputLine"></input>
                
            </div>
        )
    }
}