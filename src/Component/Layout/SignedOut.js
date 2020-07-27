import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Layout.css'


function SignedOutNavBar() {
return(

<Navbar className = "Navbar" bg="light" variant="light">
  <Navbar.Brand href="/Main"> INSTA IMG </Navbar.Brand>
    <Nav className="navbar-nav ml-auto">
      <Nav.Link href="/Main">Home</Nav.Link>
      <Nav.Link href="/Login">Log In</Nav.Link>
      <Nav.Link href="/Register">Register</Nav.Link>
      <Navbar.Collapse className="align-self-end">
    {/* <Navbar.Text>
      Signed in as: <a href="#login">username</a>
    </Navbar.Text> */}
  </Navbar.Collapse>
    </Nav>
  </Navbar>
    

)}
export default SignedOutNavBar; 