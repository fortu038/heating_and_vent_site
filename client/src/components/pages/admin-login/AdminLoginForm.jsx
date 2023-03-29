import React, { useState, useEffect } from "react";
import { Container, Button, Form, Alert } from 'react-bootstrap';

import Cookie from "js-cookie";
import { useAppContext } from "../../utils/AppContext";

function UserLoginForm() {
  const { appState, setAppState } = useAppContext();

  const [ loginCreds, setLoginCreds ] = useState({ username: "", email: "", password: "" });
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" });

  async function handleLogin(e) {
    e.preventDefault();

    setFormMessage({ type: "", msg: "" });

    const authCheck = await fetch("/api/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCreds)
    })

    const authResult = await authCheck.json();

    if( authResult.result === "success" ){
      Cookie.set("auth-token", authResult.token);
      setAppState({...appState, user: authResult.user});
      setFormMessage({ type: "success", msg: "Log in successful"})
    } else {
      setFormMessage({ type: "danger", msg: "You could not be logged in with the provided data." });
    }
    setLoginCreds({ username: "", email: "", password: "" });
  };

  function handleInputChange(e) {
    setLoginCreds({...loginCreds, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if( appState.user ) {
      window.location.href = "/contact-display";
    }
  }, [appState]);

  return (
    <Container className="my-4 w-25">
      <h5 className="text-center">
        Login:
      </h5>
      { formMessage.type != "" &&
        <Alert key={formMessage.type} variant={formMessage.type}>
          {formMessage.msg}
        </Alert>
      }
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter password" onChange={handleInputChange} />
        </Form.Group>
        <Container className="d-flex justify-content-center">
          <Button bsPrefix className="ButtonCustom" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default UserLoginForm;