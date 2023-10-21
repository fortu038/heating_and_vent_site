import React from "react";
import { Container } from "react-bootstrap";

import AdminLoginForm from "./AdminLoginForm";

// This file handles the frontend of the Admin Login page
// The admin login form can be found and modified in the file AdminLoginForm.jsx

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