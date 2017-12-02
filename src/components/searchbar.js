import React, { Component } from 'react';

class SearchBar extends Component {

    /*constructor for setting up class*/
    constructor(props) {
        super(props);
        /*initialise state*/
        this.state = { term : ''};
    }

    render(){
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={ event =>
                    this.setState({
                        term: event.target.value
                    })}/>
            </div>
        );
    }
    /*handling user input event handler*/
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;