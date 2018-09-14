import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            term : event.target.value
        })
        this.props.onInputChange(this.state.term);
    }
    render() {
        return (
            <div>
                <input type = 'text' value = {this.state.term} 
                onChange = {this.handleChange} />
            </div>
        );
    }
}

export default SearchBar;