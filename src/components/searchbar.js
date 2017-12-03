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
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ event =>
                        this.onInputChange(event.target.value)
                   }/>
            </div>
        );
    }
    /*handling user input event handler*/
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;