import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PagesRouting from "./PagesRouting";

const site_name = "Langevin Heating and Venting";
const url_name = site_name.replace(/\s/g, "");

function Routing(props) {
  <Routes>
    <Route path={`/${url_name}`} element={<PagesRouting />}/>
    <Route path="*" element={<Navigate to={`/${url_name}`}/>} />
  </Routes>
}

export default Routing;