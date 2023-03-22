import React from 'react';
import { Container, Card } from 'react-bootstrap';

const header_img = require("../../../assets/images/banner_placeholder_image.jpg");

function Homepage() {
  return(
    <Container className="my-4">
      <Card>
        <Card.Img src={header_img} alt="Header Image"/>
        <Card.ImgOverlay>
          <Card.Title>Langevin Heating and Venting</Card.Title>
          <Card.Text>
            For all your heating and venting needs!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container className="mt-4">
        <h3 className="text-center">
          We proudly provide heating and venting services to the Twin Cities area
        </h3>
      </Container>
    </Container>
  )
}

export default Homepage;