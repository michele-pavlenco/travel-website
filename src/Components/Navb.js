import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';

const Navb = () => {
  return (
    <div className="" id="navb">
      <Navbar bg="light" expand="lg" className='position-fixed w-100'>
        <Container>
          <Navbar.Brand href="#home">
            <Image className='img-fluid' src={logo} alt="logo" />
          </Navbar.Brand>

          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible content */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Places</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
            </Nav>
            <Button className='contact' type="submit">Contact</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      );
}

      export default Navb;