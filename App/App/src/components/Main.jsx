import React, { Component } from 'react';
import {Route,} from "react-router-dom";
import QuizPage from './QuizPage';
import LoginPage from './LoginPage';

class Main extends Component {
  render(props) {
    return (
      <div>
        <Route exact path="/" component={(props) => <QuizPage/>}/>
        <Route exact path="/login" component={(props) => <LoginPage/>}/>
      </div>
    );
  };
};

export default Main;