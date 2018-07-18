import React, { Component } from 'react';
import Display from './Display';
import Selector from './Selector';

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

class QuizPage extends Component {
  constructor() {
    super();
    this.getQuestions = this.getQuestions.bind(this);
  }
  state = {
    questions: [question1, question2],
  }

  getQuestions() {
    console.log('running get questions');
    // fetch('/getQuestions/helpful')
    //   .then(res => res.json())
    //   .then(result => this.setState({ questions: result }));
  }

  render() {
    const { questions } = this.state;
    return (
      <div>
        <Selector getQuestions={this.getQuestions}/>
        &nbsp;
        <Display questions={questions}/>
      </div>
    );
  }
}

export default QuizPage;