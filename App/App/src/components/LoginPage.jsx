import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class LoginPage extends Component {
  render() {
    return (
      <div className="login">
        <h1 className="textWhite"> LOGIN PAGE! </h1>
        <form>
          <div className="textWhite">Username:</div>
          <input type="text" name="username" value="" />
          <div className="textWhite">Password:</div>
          <input type="text" name="password" value="" />
        </form>
        <Button className="button"> Login </Button>
      </div>
    );
  }
}

export default LoginPage;