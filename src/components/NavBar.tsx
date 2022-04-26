import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import '../styles/navBar.scss';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="px-3">
            Ming
          </Navbar.Brand>

          <Nav className="px-3 ">
            <Nav.Link className="nav" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="nav" href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
