import React from 'react';
import { Container } from 'react-bootstrap';

function Homepage() {
  return(
    <Container>
      <div className="text-secondary d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center">
          This is the homepage
        </h2>
      </div>
    </Container>
  )
}

export default Homepage;