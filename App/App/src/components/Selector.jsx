import React, { Component } from 'react';

class Selector extends Component {
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


export default Selector;