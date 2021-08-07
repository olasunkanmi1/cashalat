import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"

// pages
import Homepage from "./pages/Homepage";

function App() {

  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

  return (
    <Router>
      <GlobalStyles />
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
