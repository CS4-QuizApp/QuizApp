import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <HashRouter>
      <div className="App">
        <NavBar/>
        <Main questions={this.questions} getQuestions={this.getQuestions}/>
      </div>
      </HashRouter>
    );
  }
}

export default App;