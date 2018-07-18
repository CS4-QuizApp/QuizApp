import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1> LOGIN PAGE! </h1>
                
                <form>
                Username:
                <input type="text" name="username" value=""/>
                Password:
                <input type="text" name="password" value=""/>
                </form>              
                <button>Login</button>
            </div>
        );
    }
}

export default LoginPage;