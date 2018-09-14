import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import GifList from './GifList';

import request from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }
  handleInputChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      console.log(res.body.data[0]);
      this.setState({
        gifs: res.body.data
      })
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Giphy App</h1>
        <SearchBar onInputChange = {this.handleInputChange} />
        <GifList gifs = {this.state.gifs} />
      </div>
    );
  }
}

export default App;
