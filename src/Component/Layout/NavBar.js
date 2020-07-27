import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Layout.css'

function NavBar() {
return(

<Navbar className="Navbar" bg="light" variant="light">
    <Navbar.Brand href="/Main"> INSTA IMG </Navbar.Brand>
    <Nav className="navbar-nav ml-auto">
      <Nav.Link to= "/Main">Home</Nav.Link>
      <Nav.Link href="/UserProfile">Profile</Nav.Link>
      <Nav.Link href="/Post">Post</Nav.Link>
      <Nav.Link href="#favorites">Favorites</Nav.Link>
      <Nav.Link href="/SignedOut">Log Out</Nav.Link>
      {/* <Navbar.Collapse className="align-self-end"> */}
    {/* <Navbar.Text>
      Signed in as: <a href="#login">username</a>
    </Navbar.Text> */}
  {/* </Navbar.Collapse> */}
    </Nav>
  </Navbar>
    

)}
export default NavBar; 