import React from 'react';
import { Container, Card } from 'react-bootstrap';

const header_img = require("../../../assets/images/banner_placeholder_image.jpg")

function Homepage() {
  return(
    <Container className="text-secondary mt-4">
      <Card>
        <Card.Img src={header_img} alt="Header Image"/>
        <Card.ImgOverlay>
          <Card.Title>Langevin Heating and Venting</Card.Title>
          <Card.Text>
            For all your heating and venting needs!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <div className="text-secondary mt-4 d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-center">
          We proudly provide heating and venting services to the Twin Cities area
        </h3>
      </div>
    </Container>
  )
}

export default Homepage;