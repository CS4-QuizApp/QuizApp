import React, { Component } from 'react';
import Display from './Display';
import Selector from './Selector';

class QuizPage extends Component {
    render() {
        return (
            <div>
                <Selector />
                &nbsp;
                <Display questions={this.props.questions}/>
            </div>
        );
    }
}

export default QuizPage;