import React, {Component} from 'react';
import './App.css';
import SearchMovies from './searchMovies'

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1 className="header">Movie Search</h1>
      <SearchMovies/>
    </div>
  );
  }
}

export default App;
