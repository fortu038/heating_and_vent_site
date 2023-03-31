import React from 'react';
import { Container, Image } from 'react-bootstrap';

import Navigation from "../../Navigation";

// const header_img = require("../../../assets/images/hvac_homepage.jpg");
const header_img = require("../../../assets/images/hvac_maintinance.jpg");

function Homepage() {
  return(
    // <Container>
    //   <Navigation />
    //   <Image src={header_img} className="Wrap" />
    //   <Container className="my-4">
    //     <Container className="mt-4">
    //       <h3 className="text-center">
    //         We proudly provide HVAC services to the Twin Cities area
    //       </h3>
    //     </Container>
    //   </Container>
    // </Container>
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