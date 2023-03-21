import React from 'react';
import { Container, Card } from 'react-bootstrap';

function AreasServed() {
  return(
    <Container className="text-secondary mt-4">
      <h3>Cities and Areas We Service:</h3>
      <ul id="areas-served-list">
        <li>Lindstrom</li>
        <li>Stacy</li>
        <li>Forest Lake</li>
        <li>Chisago City</li>
        <li>Harris</li>
        <li>St Croix Falls</li>
      </ul>

      <br />
      <br />
      
      <Card border="secondary">
        <Card.Header>Not Sure If You're In Our Service Area?</Card.Header>
        <Card.Body>
          <Card.Text>
            Contact us if you're not sure and we'll get back to you.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AreasServed;