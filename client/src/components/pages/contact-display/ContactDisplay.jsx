import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form, Alert, Row, Col } from 'react-bootstrap';
import Cookie from "js-cookie";

import { useAppContext } from "../../utils/AppContext";

import ContactDisplayGrid from "./ContactDisplayGrid";

function ContactDisplay(props) {
  const { appState, setAppState } = useAppContext();

  const [data, setData] = useState(null);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    checkPassword: ""
  });

  function handleInputChange(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);

  const [alertMessage, setAlertMessage] = useState({
    state: "",
    msg: ""
  });

  useEffect(() => {
    fetch("/api/contact")
      .then(fetch_response => fetch_response.json())
      .then(fetch_data => setData(fetch_data.payload));
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    const lookupCheck = await fetch("/api/user/lookup", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    const lookupResult = await lookupCheck.json();

    // If the login was good, save the returned token as a cookie
    if( lookupResult.result === "success" ){
      Cookie.remove("auth-token", lookupResult.token)
      setAppState({...appState, user: lookupResult.user})
    }
  };

  const handleUserCreate = async (e) => {
    e.preventDefault();

    if(newUser.password != newUser.checkPassword) {
      setAlertMessage({
        state: "error",
        msg: "Password and reentered password do not match!"
      });
      return
    };

    console.log("newUser is");
    console.log(JSON.stringify(newUser));
    
    await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          username: newUser.username,
          email: newUser.email,
          password: newUser.password
        }
      )
    })
      .then(
        async function(response) {
          const response_to_post_request = await response.json();
          console.log("response_to_post_request is:");
          console.log(response_to_post_request);

          if(!response_to_post_request.result) {
            setAlertMessage({
              state: "error",
              msg: response_to_post_request.message
            });
            return
          }

          setAlertMessage({
            state: response_to_post_request.result,
            msg: "Successful Submit"
          });

          setNewUser({
            username: "",
            email: "",
            password: "",
            checkPassword: "",
          });
        }
      )
      .catch(
        function(error) {
          console.log(error);
          setAlertMessage({
            state: "error",
            msg: "Error, please try again later"
          });
        }
      )
  };

  function handleModalOpen() {
    setShow(true);
  };

  function handleModalClose() {
    setShow(false);
  };

  return(
    <div className="bgStandard">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <h2>Contacts</h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Button bsPrefix className="ButtonCustom" type="submit" onClick={handleLogout}>
              Logout
            </Button>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Button bsPrefix className="ButtonCustom" type="submit" onClick={handleModalOpen}>
              Add User
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column align-items-center">
        {data && data.map((single_contact) =>{
          return <ContactDisplayGrid single_contact={single_contact} key={single_contact.contactName} />
        }
        )}
      </Container>

      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        { alertMessage.state === "success" &&
          <Alert key="success" variant="success">
            {alertMessage.msg}
          </Alert>
        }
        { alertMessage.state === "error" &&
          <Alert key="danger" variant="danger">
            {alertMessage.msg}
          </Alert>
        }
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>
                Username:
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>
                Email:
              </Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter email"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>
                Password:
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="checkPassword">
              <Form.Label>
                Reenter Password:
              </Form.Label>
              <Form.Control
                type="password"
                name="checkPassword"
                placeholder="Reeneter password"
                className="form-control"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Close Without Making New User
          </Button>
          <Button variant="primary" onClick={handleUserCreate}>
            Add New User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default ContactDisplay;