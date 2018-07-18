import React, { Component } from 'react';
// import Display from 'Display.jsx'

class Answer extends Component {
    render() {
        const { questions, currentIndex, nextClick } = this.props;
        let currentQuestion = questions[currentIndex];
        return (
          <div>
            &nbsp;
            <div> {currentQuestion.answer} </div>
            <div> <button> Solved </button> </div>
            <div> <button onClick={nextClick} > Next question </button> </div>
          </div>
        )
      }
}

export default Answer;