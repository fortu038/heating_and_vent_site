import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const site_name = "Gopher State Mechanical";

// This is the navigation or "nav" bar of the site. The navbar will compress down on mobile or small screens

// If a new page is created it won't be automatically added to the navbar. A new navbar link can be added using the following HTML:
/* 
  <Nav.Link as={Link} to="/path_name">
    <h3 className="HoverLink">
      page_name
    </h3>
  </Nav.Link>
*/
// Where path_name is the path name listed in Routing.jsx and page_name is the desired name of the page

function Navigation(props) {
  return(
    <div className="bgNav">
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container className="d-flex justify-content-center">
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