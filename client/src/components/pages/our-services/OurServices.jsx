import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

import ContactUsForm from '../contact-us/ContactUsForm';

const card_img = require("../../../assets/images/card_placeholder_image.jpg");

const hot_water_heater_img = require("../../../assets/images/hot_water_heater_placeholder.jpg");

function OurServices() {
  return(
    <Container className="my-4">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card bg="info">
            <Card.Img src={hot_water_heater_img} alt="An installed hot water heater" />
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
            <Card.Img src={card_img} alt="Card image" />
            <Card.Body className="CardBackground">
              <Card.Title className="CardBackground">This is one of our services</Card.Title>
              <Card.Text className="CardBackground">
                Service description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="info">
            <Card.Img src={card_img} alt="Card image" />
            <Card.Body className="CardBackground">
              <Card.Title className="CardBackground">This is one of our services</Card.Title>
              <Card.Text className="CardBackground">
                Service description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="info">
            <Card.Img src={card_img} alt="Card image" />
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
  )
}

export default OurServices;