import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            cars: ["Audi", "BMW", "Porsche", "Mclaren"],
            userInput: '',
            filteredCars: []
        };
    }
    
    handleChange(val){
        this.setState({userInput: val});
    }

    filterCars(userInput){
        const cars = this.state.cars;
        const filteredCars = [];

        for (let i = 0; i<cars.length; i++){
            if ( cars[i].includes(userInput) ){
                filteredCars.push(cars[i]);    
            }
        }

        this.setState({filteredCars: filteredCars});
    }

    render () {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Cars: { JSON.stringify(this.state.cars, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterCars(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredCars, null, 10) } </span>
            </div>
        )
    }
}