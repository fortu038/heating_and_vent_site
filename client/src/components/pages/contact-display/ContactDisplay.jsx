import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Cookie from "js-cookie";

import { useAppContext } from "../../utils/AppContext";

import ContactDisplayGrid from "./ContactDisplayGrid";

function ContactDisplay(props) {
  const { appState, setAppState } = useAppContext();

  const [data, setData] = useState(null);

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

  return(
    <div className="bgStandard">
      <Container className="d-flex align-items-center justify-content-evenly">
        <h2>Contacts</h2>
        <Button bsPrefix className="ButtonCustom" type="submit" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
      <Container className="d-flex flex-column align-items-center">
        {data && data.map((single_contact) =>{
          return <ContactDisplayGrid single_contact={single_contact} key={single_contact.contactName} />
        }
        )}
      </Container>
    </div>
  )
};

export default ContactDisplay;