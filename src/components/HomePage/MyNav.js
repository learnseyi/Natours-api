import React from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap'
import './nav.css'


const MyNav = ()=>{
  return(
    <Navbar className = 'mainNav px-5'  expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto px-5">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    <Button variant="outline-success">Login</Button>
  </Navbar.Collapse>
</Navbar>
  )
}

export default MyNav;