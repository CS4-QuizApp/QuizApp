import React, { Component } from 'react';

class Prompt extends Component {
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
        <div className='questionBox'> {currentQuestion.question} </div>
        <form>
          <label> <div className='textWhite'> Response: </div>
            <input type="text" value={response} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}

export default Prompt;