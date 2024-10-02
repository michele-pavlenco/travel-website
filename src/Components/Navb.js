import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';

const Navb = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><Image className='img-fluid' src={logo} /></Navbar.Brand>
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Places</Nav.Link>
            <Nav.Link href="#">Careers</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>
          <Button type="submit">Contact</Button>
        </Container>
      </Navbar>
    </>
  )
}

export default Navb