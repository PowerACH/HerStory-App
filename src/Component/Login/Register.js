import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userEmail: "",
            userPassword: "",
            firstName: "",
            lastName: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    userEmailRegister = event => {
        this.setState({ userEmail: event.target.value })
    }

    usernameRegister = event => {
        this.setState({ username: event.target.value })
    }

    passwordRegister = event => {
        this.setState({ userPassword: event.target.value })
    }

    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault();
    }

    routeChange = () => {
        this.props.history.push(`/login`); 
    }

    render() {
        return (
            <div className = "loginContainer" >
                <div className = "header">Register</div>
                <div className = "loginContent">
                <div className = "loginLogo"> INSTA IMG
                    </div>
                    <Form>
                    <Form.Group controlId="firstName">
                            {/* <Form.Label>First Name</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            placeholder="First Name"
                            onChange={this.handleChange}
                             />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            {/* <Form.Label>Last Name</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            placeholder="Last Name"
                            onChange={this.handleChange}
                             />
                        </Form.Group>

                    <Form.Group controlId="formBasicText">
                            {/* <Form.Label>Username</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            placeholder="Username"
                            onChange={this.usernameRegister}
                             />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control 
                            type="email" 
                            placeholder="email@instaimg.com"
                            onChange = {this.userEmailRegister}
                             />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange = {this.passwordRegister}
                            />
                        </Form.Group>
                        
                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {this.handleSubmit}
                        >
                            Register
                        </Button>

                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = { this.routeChange}
                        >
                            Need to Log In?
                        </Button>
                        </Form>
                </div>
            </div>
        )
    }
}