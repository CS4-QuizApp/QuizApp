import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Selector from './components/Selector';
import Display from './components/Display';
import Answer from './components/Answer';
import Prompt from './components/Prompt';
// import './App.css';

function Question() {
  this.question = null;
  this.answer = null;
  this.categories = [];
  this.addDate = [];
  this.solved = null;
  this.lastViewed = null;
}

let question1 = new Question();
question1.question = 'Design citi bike';
question1.answer = 'Just make lots of bikes';
question1.categories = 'System Design'
question1.addDate = new Date();
question1.solved = false;

let question2 = new Question();
question2.question = 'Recursive solution for R-P-S';
question2.answer = 'Each subarray from the last solution x3 with each possible move appended';
question2.categories = 'Algorithms'
question2.addDate = new Date();
question2.solved = false;

class App extends Component {
  state = {
    questions: [question1, question2]
  }

  componentDidMount() {
  }

  render() {
    return (
      <HashRouter>
      <div className="App">
        <Selector />
        &nbsp;
        <Display questions={this.state.questions}/>
      </div>
      </HashRouter>
    );
  }
}


export default App;