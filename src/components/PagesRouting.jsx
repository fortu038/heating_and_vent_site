import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import AboutUs from "./pages/about-us/AboutUs";
import AreasServed from "./pages/area-served/AreasServed";
import ContactUs from "./pages/contact-us/ContactUs";
import OurServices from "./pages/our-services/OurServices";

function PagesRouting(props) {
  <Routes>
    <Route path="" element={<Homepage />}/>
    <Route path="/about-us" element={<AboutUs />}/>
    <Route path="/areas-served" element={<AreasServed />}/>
    <Route path="/contact-us" element={<ContactUs />}/>
    <Route path="/our-services" element={<Homepage />}/>
    <Route path="*" element={<Navigate to=""/>} />
  </Routes>
};

export default PagesRouting;