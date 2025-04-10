import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-3 fw-bolder offset-md-1">
          inkevine.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="d-flex ms-auto me-5">
            <Nav className="me-auto my-2 my-lg-0 ms-4 gap-3">
              <Nav.Link href="#action1" className="fs-6 fw-bolder">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="fs-6 fw-bolder">
                About me
              </Nav.Link>
              <Nav.Link href="#action3" className="fs-6 fw-bolder">
                Projects
              </Nav.Link>
              <Nav.Link href="#action4" className="fs-6 fw-bolder">
                Contacts
              </Nav.Link>
              <Button variant="btn custom-button" className="ms-3">
                Let's Talk
              </Button>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
