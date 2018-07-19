import React, { Component } from 'react';
import {Route,} from "react-router-dom";
import QuizPage from './QuizPage';
import LoginPage from './LoginPage';
import QuestionPage from './QuestionPage';

class Main extends Component {
  render(props) {
    return (
      <div>
        <Route exact path="/" component={(props) => <QuizPage/>}/>
        <Route exact path="/login" component={(props) => <LoginPage/>}/>
        <Route exact path="/questions" component={(props) => <QuestionPage/>}/>
      </div>
    );
  };
};

export default Main;