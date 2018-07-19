import React, { Component } from 'react';

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

  getSubcategories(category) {
    /// write this next!
  }

  render() {
    const { getQuestions } = this.props;
    const { categories, subcategories } = this.state;
    const categoryDropDown = categories.map((category, index) => <option value={category} key={index + 1}> {category} </option>);
    categoryDropDown.splice(0, 0, <option value='Select a category' key='0'> Select a category </option>)
    return (
      <div> 
        <div> Select a category and click 'generate questions' </div>
        <div>
        <select>
          {categoryDropDown}
        </select> 
        </div>
        <button onClick={getQuestions}> Generate questions </button>
      </div>
    )
  }
}


export default Selector;