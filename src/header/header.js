import React from "react";
import {
  // Button,
  Container,
  // Form,
  // FormControl,
  Nav,
  Navbar,
  // NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "./../resources/logo.jpg";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand={false} collapseOnSelect={true}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={logo} alt="logo"></img>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/LoginPage">
                  <Nav.Link>Account</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link>Feed</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/NewList">
                  <Nav.Link>New List</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/PostPage">
                  <Nav.Link></Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow} className="me-2">
//         {name}
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// function Header() {
//   return (
//     <>
//       {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//         <OffCanvasExample key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

// export default Header;
