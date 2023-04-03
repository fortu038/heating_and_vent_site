import React, { useState } from 'react';
import { Container, Card, Button, Modal } from 'react-bootstrap';

function ContactDisplayGrid(props) {
  const contact_data = props.single_contact;

  const [show, setShow] = useState(false);

  function handleModalOpen() {
    setShow(true);
  };

  function handleModalClose() {
    setShow(false);
  };

  async function handleContactDelete() {
    console.log("deleted!");

    await fetch(`/api/contact/${contact_data._id}`, {
      method: "DELETE",
    })
      .then(function(fetch_response) 
        {
          console.log(fetch_response.result);
        }
      )
      .catch(function(err) 
      {
        console.log(err);
      })

    setShow(false);

    window.location.reload();
    return false;
  };

  return(
    <Container className="my-4">
      <Card bg="info">
        <Card.Header>Contact Name: {contact_data.contactName}</Card.Header>
        <Card.Body className="CardBackground">
          <Card.Title className="CardBackground">
            Email: {contact_data.email}
            <br />
            Phone: {contact_data.phone}
          </Card.Title>
          <Card.Text className="CardBackground">
            Message: {contact_data.message}
          </Card.Text>
          <Button className="mt-5" variant="danger" type="submit" onClick={handleModalOpen}>
            Delete
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header className="bg-light" closeButton>
          <Modal.Title className="bg-light">Delete Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          Are you sure you want to delete this message from {contact_data.contactName}? This cannot be reversed if done.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            No, Don't Delete
          </Button>
          <Button variant="danger" onClick={handleContactDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
};

export default ContactDisplayGrid;