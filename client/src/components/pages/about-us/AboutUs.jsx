import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ContactUsForm from '../contact-us/ContactUsForm';
import Navigation from "../../Navigation";

// Images used on the about us page.
const worker_img = require("../../../assets/images/hvac_worker_image.jpg");
const job_img = require("../../../assets/images/on_the_job_placeholder.jpg");

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

function AboutUs() {
  return(
    // bgStandard can be found and modified in App.css
    <div className="bgStandard">
      <Navigation />

      <Container className="my-4">
        <Row>
          <Col>
            {/* Page header */}
            <h3 className="text-center">
              About Us
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <img className="SidelineImg" src={worker_img} alt="A placeholder for the founder of Lagevin Heating and Venting." />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <h5>Our founder and employees work hard to bring the community quality heating and venting.</h5>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} sm={12} md={6} lg={6} className="d-flex justify-content-center mt-4">
            <img className="SidelineImg" src={job_img} alt="An employee on the job." />
          </Col>
          <Col className="d-flex justify-content-center align-items-center mt-4">
            <h5>We work not just with heating, but also with ventilation!</h5>
          </Col>
        </Row>
        
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <ContactUsForm />
      </Container>
    </div>
  )
}

export default AboutUs;