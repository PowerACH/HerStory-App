import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css';

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userPassword: ""
        }
    }   //function for username 
        usernameSignIn = event => {
            this.setState({ username: event.target.value });
        }
        
        //function for password update of state
        signinPassword = event => {
            this.setState({ userPassword: event.target.value});
        }
        //function for submission of form
        handleSubmit = event => {
            console.log(this.state)
            event.preventDefault(); // prevent default action of page refresh 
        }

    render() {
        return (
            <div className = "loginContainer" >
                <div className = "header">Login</div>
                <div className = "loginContent">
                    <div className = "loginLogo"> INSTA IMG
                    </div>
                    <Form>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Username"
                            onChange={this.usernameSignIn}
                             />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={this.signinPassword}
                             />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {this.handleSubmit}
                        >
                            Log In
                        </Button>
                        
                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {() => ("Register")}
                        >
                            Want to Register?
                        </Button>
                        </Form>
                </div>
            </div>
        )
    }
}