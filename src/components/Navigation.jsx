import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const site_name = "Langevin Heating And Venting";

function Navigation(props) {
  return(
    <Container>
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
                <Nav.Link as={Link} to="">
                  <h3>
                    Home
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="about-us">
                  <h3>
                    About Us
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="our-services">
                  <h3>
                    Our Services
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="areas-served">
                  <h3>
                    Areas Served
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="contact-us">
                  <h3>
                    Contact Us
                  </h3>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </Container>
  )
}

export default Navigation;