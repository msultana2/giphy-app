import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }
  handleInputChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({ gifs: res.data })
      })
      .catch(e => console.log('error', e));
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
