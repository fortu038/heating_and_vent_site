import React from 'react';
import { Container, Card } from 'react-bootstrap';

const header_img = require("../../../assets/images/HVAC_placeholder.jpg");

function Homepage() {
  return(
    <Container className="my-4">
      <Card className="bg-dark">
        <Card.Img bsPrefix src={header_img} alt="Header Image"/>
        {/* <Card.ImgOverlay className="TransparentBackground">
          <Card.Title className="TransparentBackground">Langevin HVAC</Card.Title>
          <Card.Text className="TransparentBackground">
            For all your heating and venting needs!
          </Card.Text>
        </Card.ImgOverlay> */}
      </Card>
      <Container className="mt-4">
        <h3 className="text-center">
          We proudly provide HVAC services to the Twin Cities area
        </h3>
      </Container>
    </Container>
  )
}

export default Homepage;