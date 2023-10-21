import React, { useState } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';

// This file handles the layout/display of the contact us form that appears on various pages

function ContactUsForm(props) {
  // Backend Stuff
  // -------------
  const [emailData, setEmailData] = useState({
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  function handleInputChange(e) {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          contactName: emailData.contactName,
          email: emailData.email,
          phone: emailData.phone,
          message: emailData.message
        }
      )
    })
      .then(
        async function(response) {
          const response_to_post_request = await response.json();
          console.log("response_to_post_request is:");
          console.log(response_to_post_request);

          setAlertMessage(response_to_post_request);

          setEmailData({
            contactName: "",
            email: "",
            phone: "",
            message: "",
          });
        }
      )
      .catch(
        function(error) {
          console.log(error);
          setAlertMessage("error");
        }
      )
  };

  // Frontend Stuff
  // --------------
  return (
    // The below HTML determines the layout of the contact us form
    <Container className="my-4 w-75">
      <h5 className="text-center">
        Any Questions? Send Us a Message and We'll Get Back to You.
      </h5>
      { alertMessage.result === "success" &&
        <Alert key="success" variant="success">
          Successful Submit
        </Alert>
      }
      { alertMessage === "error" &&
        <Alert key="danger" variant="danger">
          Submit Error, Please Try Again Later
        </Alert>
      }
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" name="contactName" placeholder="Enter name" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control required type="email" name="email" placeholder="Enter email" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required type="tel" name="phone" placeholder="Enter phone number" onChange={handleInputChange} />
          <Form.Text bsPrefix className="FormText">
            We will never share your name, email, or phone number with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" name="message" rows={3} onChange={handleInputChange} />
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