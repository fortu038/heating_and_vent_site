import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const site_name = "Langevin Heating And Venting";

function Navigation(props) {
  return(
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-light">
        <Container className="text-center">
          <Navbar.Brand className="text-secondary">
            {site_name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="flex-grow-1 justify-content-evenly">
                <Nav.Link as={Link} to="">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="about-us">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="our-services">
                  Our Services
                </Nav.Link>
                <Nav.Link as={Link} to="areas-served">
                  Areas Served
                </Nav.Link>
                <Nav.Link as={Link} to="contact-us">
                  Contact Us
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