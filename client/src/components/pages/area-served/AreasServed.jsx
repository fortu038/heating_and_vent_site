import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ContactUsForm from '../contact-us/ContactUsForm';
import Navigation from "../../Navigation";

// This file handles the frontend and backend of the Areas Served page

/* 
Layout Info
-----------

The layout of images and text boxes is modified using the Row and Col HTML tags


+---+---+
| A | B |
+---+---+
A layout like above can be created using the following tag format:
<Row>
  <Col>
    A
  </Col>
  <Col>
    B
  </Col>
</Row>

+---+
| A |
+---+
| B |
+---+
A layout like above can be created using the following tag format:
<Row>
  <Col>
    A
  </Col>
</Row>
<Row>
  <Col>
    B
  </Col>
</Row>


On mobile or small screens the display layout will change to be formatted like the following:
+---+
| A |
+---+
| B |
+---+
*/

function AreasServed() {
  return(
    // The below HTML determines the layout of the Areas Served page
    <div className="bgStandard">
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
    </div>
  )
}

export default AreasServed;