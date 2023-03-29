import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ContactUsForm from '../contact-us/ContactUsForm';
import Navigation from "../../Navigation";

function AreasServed() {
  return(
    <Container>
      <Navigation />
      <Container className="my-4">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <h3>Cities and Areas We Service:</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <ul>
                <li>Lindstrom</li>
                <li>Stacy</li>
                <li>Forest Lake</li>
                <li>Chisago City</li>
                <li>Harris</li>
                <li>St Croix Falls</li>
              </ul>
            </Col>
          </Row>
        </Container>
        
        <ContactUsForm />
      </Container>
    </Container>
  )
}

export default AreasServed;