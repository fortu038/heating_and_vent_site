import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const card_img = require("../../../assets/images/card_placeholder_image.jpg");

function OurServices() {
  return(
    <Container className="text-secondary mt-4">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img src={card_img} alt="Card image" />
            <Card.Body>
              <Card.Title>This is one of our services</Card.Title>
              <Card.Text>
                Service description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={card_img} alt="Card image" />
            <Card.Body>
              <Card.Title>This is one of our services</Card.Title>
              <Card.Text>
                Service description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={card_img} alt="Card image" />
            <Card.Body>
              <Card.Title>This is one of our services</Card.Title>
              <Card.Text>
                Service description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={card_img} alt="Card image" />
            <Card.Body>
              <Card.Title>This is one of our services</Card.Title>
              <Card.Text>
                Service description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default OurServices;