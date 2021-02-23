import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from "./views/FrontPage";
import SignUp from "./views/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
