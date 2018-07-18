import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class Selector extends Component {
  render() {
    const { getQuestions } = this.props;
    return (
      <div className='selector'> 
        <h2> Select a category and click 'generate questions' </h2>
        <div>
        <FormControl componentClass="select" className="input-small" placeholder="select">
        <option value="Algorithms">Algorithms</option>
        <option value="System design">System design</option>
      </FormControl>
          {/* <select>
            <option value="Algorithms"> Algorithms </option>
            <option value="System design"> System design </option>
          </select>  */}
        </div>
        <Button className="button" onClick={getQuestions}> Generate questions </Button>
      </div>
    )
  }
}


export default Selector;