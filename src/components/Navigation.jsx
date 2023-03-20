import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const site_name = "Langevin Heating And Venting";

function Navigation(props) {
  return(
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container className="text-center">
          <Navbar.Brand>
            <h1 className="text-secondary">{site_name}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto d-flex align-items-center">
                <Nav.Link as={Link} to="">
                  <h5>Home</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="about-us">
                  <h5>About Us</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="our-services">
                  <h5>Our Services</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="areas-served">
                  <h5>Areas Served</h5>
                </Nav.Link>
                <Nav.Link as={Link} to="contact-us">
                  <h5>Contact Us</h5>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
}

export default Navigation;