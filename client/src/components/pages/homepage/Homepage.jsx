import React from 'react';
import { Container } from 'react-bootstrap';

import Navigation from "../../Navigation";

// The images used on the Homepage page
const header_img = require("../../../assets/images/hvac_home_image.jpg");

function Homepage() {
  return(
    // The below HTML determines the layout of the Homepage page
    <div className="bgStandard">
      <Navigation />
      <img src={header_img} className="Wrap" alt="Person working on HVAC" />
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