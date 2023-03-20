import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./Navigation";
import Homepage from "./pages/homepage/Homepage";
import AboutUs from "./pages/about-us/AboutUs";
import AreasServed from "./pages/area-served/AreasServed";
import ContactUs from "./pages/contact-us/ContactUs";
import OurServices from "./pages/our-services/OurServices";

const site_name = "Langevin Heating And Venting";
const url_name = site_name.replace(/\s/g, "");

function Routing(props) {
  return(
    <Routes>
      <Route path={`/${url_name}`} element={<Navigation />}>
        <Route index element={<Homepage />}/>
        <Route path="about-us" element={<AboutUs />}/>
        <Route path="areas-served" element={<AreasServed />}/>
        <Route path="contact-us" element={<ContactUs />}/>
        <Route path="our-services" element={<OurServices />}/>
        <Route path="*" element={<Navigate to=""/>} />
      </Route>
      <Route path="*" element={<Navigate to={`/${url_name}`}/>} />
    </Routes>
  )
}

export default Routing;