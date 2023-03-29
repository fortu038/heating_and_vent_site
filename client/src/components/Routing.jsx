import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "./utils/AppContext";

import Homepage from "./pages/homepage/Homepage";
import AboutUs from "./pages/about-us/AboutUs";
import AreasServed from "./pages/area-served/AreasServed";
import ContactUs from "./pages/contact-us/ContactUs";
import OurServices from "./pages/our-services/OurServices";
import AdminLogin from "./pages/admin-login/AdminLogin";
import ContactDisplay from "./pages/contact-display/ContactDisplay";


function Routing(props) {
  const { appState } = useAppContext();

  return(
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path="/about-us" element={<AboutUs />}/>
      <Route path="/areas-served" element={<AreasServed />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/our-services" element={<OurServices />}/>
      { !appState.user &&
          <>
            <Route path="/contact-display" element={<Navigate to="/"/>} />
            <Route path="/admin-login" element={<AdminLogin />}/>
          </>
      }
      { appState.user &&
        <>
          <Route path="/admin-login" element={<Navigate to="/contact-display"/>} />
          <Route path="/contact-display" element={<ContactDisplay />} />
        </>
      }
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default Routing;