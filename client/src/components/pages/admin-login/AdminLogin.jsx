import React from "react";
import { Container } from "react-bootstrap";

import AdminLoginForm from "./AdminLoginForm";

function AdminLogin() {
  return(
    <div className="bgStandard">

      <div className="text-secondary d-flex flex-column justify-content-center align-items-center">
        <h2>Log In</h2>
        <AdminLoginForm />
      </div>
    </div>
  )
}

export default AdminLogin;