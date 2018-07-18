import React, { Component } from 'react';
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
  constructor() {
    super();
    this.getQuestions = this.getQuestions.bind(this);
  }
  state = {
    questions: [question1, question2]
  }

  componentDidMount() {
  }

  getQuestions() {
    console.log('running get questions');
    fetch('/getQuestions/helpful')
      .then(res => res.json())
      .then(result => this.setState({ questions: result }));
  }

  render() {
    return (
      <div className="App">
        <Selector getQuestions={this.getQuestions} />
        &nbsp;
        <Display questions={this.state.questions}/>
      </div>
    );
  }
}

class Selector extends App {
  constructor(props) {
    super(props);
  }
  render() {
    const { getQuestions } = this.props;
    return (
      <div> 
        <div> Select a category and click 'generate questions' </div>
        <div>
          <select>
            <option value="Algorithms"> Algorithms </option>
            <option value="System design"> System design </option>
          </select> 
        </div>
        <button onClick={getQuestions}> Generate questions </button>
      </div>
    )
  }
}

class Display extends App {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      showAnswer: false
    }
    this.showClick = this.showClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  showClick() {
    let currShow = this.state.showAnswer;
    this.setState({ showAnswer: !currShow });
  }

  nextClick() {
    const { questions } = this.props;
    let currIndex = this.state.currentIndex;
    let nextIndex = (currIndex + 1) % questions.length;
    this.setState({ currentIndex: nextIndex })
    this.showClick();
  }

  render() {
    const { questions } = this.props;
    const { currentIndex, showAnswer } = this.state;
    let answerArea;
    if (showAnswer)  {
      answerArea = <Answer questions={questions} currentIndex={currentIndex} nextClick={this.nextClick} />
    } else {
      answerArea = <div />
    }
    return (
      <div> 
        Question:
        <Prompt questions={questions} currentIndex={currentIndex}/>
        <button onClick={this.showClick}> Show answer </button>
        {answerArea}
      </div>
    )
  }
}

class Prompt extends Display {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ response: e.target.value })
  }
  render() {
    const { response } = this.state;
    const { questions, currentIndex } = this.props;
    let currentQuestion = questions[currentIndex];
    return (
      <div>
        <div> {currentQuestion.question} </div>
        <form>
          <label> <div> Response: </div>
            <input type="text" value={response} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}

class Answer extends Display {
  // constructor(props) {
  //   super(props);
  // }

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

export default App;