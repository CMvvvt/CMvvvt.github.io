import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import '../styles/navBar.scss';

function NavBar() {
  const element = React.useRef<HTMLElement>(null);

  function handleClick(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    anchor: string
  ) {
    const anchorTarget = document.getElementsByClassName(anchor);
    anchorTarget[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" className="navbar">
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="px-3"
            onClick={(e) => handleClick(e, 'top-header')}
          >
            Ming
          </Navbar.Brand>
          <Nav className="px-3 ">
            <Nav.Link
              className="nav"
              onClick={(e) => handleClick(e, 'top-header')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav"
              onClick={(e) => handleClick(e, 'project-page')}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
function handleClick(): React.MouseEventHandler<HTMLElement> | undefined {
  throw new Error('Function not implemented.');
}
