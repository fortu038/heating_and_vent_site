import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ContactUsForm from '../contact-us/ContactUsForm';
import Navigation from "../../Navigation";

const worker_img = require("../../../assets/images/worker_placeholder.jpg");
const job_img = require("../../../assets/images/card_placeholder_image.jpg");

function AboutUs() {
  return(
    <Container>
      <Navigation />
      <Container className="my-4">
        <Row>
          <Col>
            <h3 className="text-center">
              About Us
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <img src={worker_img} alt="The founder of Lagevin Heating and Venting." />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <h5>Our founder and employees work hard to bring the community quality heating and venting.</h5>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="d-flex justify-content-center">
            <img src={job_img} alt="An employee on the job." />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
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
    </Container>
  )
}

export default AboutUs;