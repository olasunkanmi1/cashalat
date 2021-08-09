import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// components
import Header from "./components/Header";
import Footer from './components/Footer';

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
      <Header/>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
