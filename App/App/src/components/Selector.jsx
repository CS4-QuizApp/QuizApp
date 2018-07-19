import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class Selector extends Component {
  state = {
    categories: [],
    subcategories: [],
    selectedCat: '',
    selectedSubcat: ''
  }

  componentDidMount() {
    fetch('/getCategories')
      .then(res => res.json())
      .then(result => { 
        let categories = result.rows.map((object) => object.category);
        this.setState({ categories });
      });
  }

  render() {
    const { getQuestions } = this.props;
    const { categories, subcategories } = this.state;
    const categoryDropDown = categories.map((category, index) => <option value={category} key={index + 1}> {category} </option>);
    categoryDropDown.splice(0, 0, <option value='Select a category' key='0'> Select a category </option>)
    return (
      <div className='selector'> 
        <h2> Select a category and click 'generate questions' </h2>
        <div>
        <FormControl componentClass="select" className="input-small" placeholder="select">
        <option value="Algorithms">Algorithms</option>
        <option value="System design">System design</option>
      </FormControl>
      {/* <select>
          {categoryDropDown}
      </select>  */}
        </div>
        <Button className="button" onClick={getQuestions}> Generate questions </Button>
      </div>
    )
  }
}


export default Selector;