import React, { Component } from 'react';
import Display from './Display';
import Selector from './Selector';

class QuizPage extends Component {
  render() {
    const { questions, getQuestions } = this.props;
    return (
      <div>
        <Selector getQuestions={getQuestions}/>
        &nbsp;
        <Display questions={questions}/>
      </div>
    );
  }
}

export default QuizPage;