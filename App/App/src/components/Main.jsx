import React, { Component } from 'react';
import {Route,} from "react-router-dom";
import QuizPage from './QuizPage';
import LoginPage from './LoginPage';

class Main extends Component {
    render(props) {
        return (
            <div>
            <Route exact path="/" component={(props) => <QuizPage questions={this.props.questions}/>}/>
            <Route exact path="/login" component={(props) => <LoginPage/>}/>
             {/* <QuizPage questions={this.props.questions} /> */}
            </div>
        );
    }
}

export default Main;