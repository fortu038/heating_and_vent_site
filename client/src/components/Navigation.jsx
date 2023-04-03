import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const site_name = "Langevin HVAC";

function Navigation(props) {
  return(
    <div className="bgNav">
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container className="text-center">
          <Navbar.Brand>
            <h1>
              {site_name}
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="flex-grow-1 justify-content-evenly align-items-center">
                <Nav.Link as={Link} to="/">
                  <h3 className="HoverLink">
                    Home
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us">
                  <h3 className="HoverLink">
                    About Us
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="/our-services">
                  <h3 className="HoverLink">
                    Our Services
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="/areas-served">
                  <h3 className="HoverLink">
                    Areas Served
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us">
                  <h3 className="HoverLink">
                    Contact Us
                  </h3>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;