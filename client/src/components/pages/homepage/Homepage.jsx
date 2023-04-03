import React from 'react';
import { Container, Image } from 'react-bootstrap';

import Navigation from "../../Navigation";

const header_img = require("../../../assets/images/hvac_home_image.jpg");

function Homepage() {
  return(
    <div>
      <Navigation />
      <img src={header_img} className="Wrap" />
      <Container className="my-4">
         <Container className="mt-4">
           <h3 className="text-center">
             We proudly provide HVAC services to the Twin Cities area
           </h3>
         </Container>
       </Container>
    </div>
  )
}

export default Homepage;