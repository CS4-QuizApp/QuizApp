import React, { Component } from 'react';

class Selector extends Component {
    render() {
        return (
            <div>
              <div> Select a category and click 'generate questions' </div>
               <div>
                <select>
                 <option value="Algorithms"> Algorithms </option>
                    <option value="System design"> System design </option>
                </select> 
            </div>
            <button> Generate questions </button>
         </div>
        );
    }
}

export default Selector;