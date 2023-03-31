import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import ContactDisplayGrid from "./ContactDisplayGrid";

function ContactDisplay(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/contact")
      .then(fetch_response => fetch_response.json())
      .then(fetch_data => setData(fetch_data.payload));
  }, []);

  return(
    <Container>
      <Container className="d-flex flex-column align-items-center">
        <h2>Contacts</h2>
        {data && data.map((single_contact) =>{
          return <ContactDisplayGrid single_contact={single_contact} key={single_contact.contactName} />
        }
        )}
      </Container>
    </Container>
  )
};

export default ContactDisplay;