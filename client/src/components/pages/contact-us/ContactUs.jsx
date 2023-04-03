import React from 'react';
import { Container } from 'react-bootstrap';

import ContactUsForm from './ContactUsForm';
import Navigation from "../../Navigation";

function ContactUs() {
  return(
    <div className="bgStandard">
      <Navigation />
      <Container className="my-4">
          <h3 className="text-center">
            We can be contacted at:
          </h3>
          <div className="d-flex justify-content-center">
            <ul id="ContactUsList">
              <li>Primary Phone: <a className="HoverLink" href="tel:1234567890">123-456-7890</a></li>
              <li>Secondary Phone: <a className="HoverLink" href="tel:9876543210">987-654-3210</a></li>
              <li>Email: <a className="HoverLink" href="mailto:email@example.com">email@example.com</a></li>
              {/* Convert address link into Google maps links for the address at later date */}
              <li>Address: <a className="HoverLink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/">123 Main Street, Somewhere, OK, USA</a></li>
            </ul>
          </div>
          <ContactUsForm />
      </Container>
    </div>
  )
}

export default ContactUs;