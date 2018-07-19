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

  getSubcategories(category) {
    /// write this next!
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
<<<<<<< HEAD
<<<<<<< HEAD
        <select>
          {categoryDropDown}
        </select> 
=======
=======
>>>>>>> d8882f0f21288156d12b961c19a6cb82d013294d
        <FormControl componentClass="select" className="input-small" placeholder="select">
        {/* <option value="Algorithms">Algorithms</option>
        <option value="System design">System design</option> */}
        {categoryDropDown}
      </FormControl>
<<<<<<< HEAD
>>>>>>> 24e6df06c9559ae4f1175e096c6e4edb482a4667
=======
>>>>>>> d8882f0f21288156d12b961c19a6cb82d013294d
        </div>
        <Button className="button" onClick={getQuestions}> Generate questions </Button>
      </div>
    )
  }
}


export default Selector;