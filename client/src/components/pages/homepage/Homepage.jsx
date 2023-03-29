import React from 'react';
import { Container, Card } from 'react-bootstrap';

import Navigation from "../../Navigation";

const header_img = require("../../../assets/images/HVAC_placeholder.jpg");

function Homepage() {
  return(
    <Container>
      <Navigation />
      <Container className="my-4">
        <Card className="bg-dark">
          <Card.Img bsPrefix src={header_img} alt="Header Image"/>
        </Card>
        <Container className="mt-4">
          <h3 className="text-center">
            We proudly provide HVAC services to the Twin Cities area
          </h3>
        </Container>
      </Container>
    </Container>
  )
}

export default Homepage;