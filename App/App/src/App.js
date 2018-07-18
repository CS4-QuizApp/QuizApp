import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';
// import './App.css';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <HashRouter>
      <div className="App">

        <Main/>
      </div>
      </HashRouter>
    );
  }
}

export default App;