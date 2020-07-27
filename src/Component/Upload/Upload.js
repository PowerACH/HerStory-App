import React from 'react';
import { Form, Button } from 'react-bootstrap'
import '../Login/login.css'

export default class CreatePost extends React.Component {
    constructor() {
        super ();
            this.state = {
                imageCaption: '',
                postImage: ''
            }
    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value //Assigns value to props
        })
    }

    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div className = "loginContainer" >
                <div className = "loginContent">
                <div className = "loginLogo"> INSTA IMG
                    </div>
                    <Form>
                        <Form.Group>
                            <Form.File 
                            id="postImage" 
                            label="Upload Image"
                            onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="imageCaption">
                            <Form.Label>Photo Caption</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows="3"
                            onChange={this.handleChange} />
                        </Form.Group>
                        
                        <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {this.handleSubmit}
                        >
                            Post
                        </Button>
                        </Form>
                </div>
            </div>
        )
    }
}