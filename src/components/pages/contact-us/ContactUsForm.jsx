import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

function ContactUsForm(props) {
  return (
    <Container className="my-4 w-25">
      <h5 className="text-center">
        Any Questions? Send Us a Message and We'll Get Back to You.
      </h5>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
          <Form.Text bsPrefix className="FormText">
            We will never share your email or phone number with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Container className="d-flex justify-content-center">
          <Button bsPrefix className="ButtonCustom" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default ContactUsForm;