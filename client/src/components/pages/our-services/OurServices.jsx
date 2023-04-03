import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

import ContactUsForm from '../contact-us/ContactUsForm';
import Navigation from "../../Navigation";

const card_img = require("../../../assets/images/card_placeholder_image.jpg");

const hot_water_heater_image = require("../../../assets/images/hot_water_heater_image.jpg");
const maintenance_image = require("../../../assets/images/hvac_thumbs_up.jpg");
const install_image = require("../../../assets/images/hvac_installation_cartoon.png");
const general_hvac_image = require("../../../assets/images/hvac_system_diagram.jpg");

function OurServices() {
  return(
    <Container>
      <Navigation />
      <Container className="my-4">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card bg="info">
              <Card.Img src={hot_water_heater_image} alt="An installed hot water heater" />
              <Card.Body className="CardBackground">
                <Card.Title className="CardBackground">Hot Water Heater Install</Card.Title>
                <Card.Text className="CardBackground">
                  We install hot water heaters
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="info">
              <Card.Img src={maintenance_image} alt="Card image" />
              <Card.Body className="CardBackground">
                <Card.Title className="CardBackground">General HVAC maintenance</Card.Title>
                <Card.Text className="CardBackground">
                  We do general HVAC maintenance
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="info">
              <Card.Img src={install_image} alt="Card image" />
              <Card.Body className="CardBackground">
                <Card.Title className="CardBackground">General HVAC Install</Card.Title>
                <Card.Text className="CardBackground">
                  We do general HVAC install
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="info">
              <Card.Img src={general_hvac_image} alt="Card image" />
              <Card.Body className="CardBackground">
                <Card.Title className="CardBackground">This is one of our services</Card.Title>
                <Card.Text className="CardBackground">
                  Service description
                </Card.Text>
              </Card.Body>
            </Card>
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

export default OurServices;