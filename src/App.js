import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// components
import Header from "./components/Header";
import Footer from './components/Footer';

// pages
import Homepage from "./pages/Homepage";
import Company from './pages/Company';
import FeatureSavings from './pages/FeatureSavings';
import FeatureInvestments from './pages/FeatureInvestments';
import FeatureLoans from './pages/FeatureLoans';
import FeaturePayments from './pages/FeaturePayments';
import CompanyCulture from './pages/CompanyCulture';

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Header/>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" exact component={Company} />
        <Route path="/careers" exact component={CompanyCulture} />
        <Route path="/savings" exact component={FeatureSavings} />
        <Route path="/investments" exact component={FeatureInvestments} />
        <Route path="/loans" exact component={FeatureLoans} />
        <Route path="/payments" exact component={FeaturePayments} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
