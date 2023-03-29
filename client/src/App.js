import './App.css';

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from './components/utils/AppContext';

import Routing from "./components/Routing";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routing />
      </AppProvider>
    </Router>
  );
}

export default App;
