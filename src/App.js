import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// components
import {Header, Footer} from "./components";

// pages
import {Homepage, Company, FeatureSavings, FeatureInvestments, FeatureLoans, FeaturePayments, CompanyCulture} from "./pages";

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
