import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// components
import Header from "./components/Header";

// pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
