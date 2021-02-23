import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Background from "./components/Background";
import Logo from "./components/Logo";
import FrontPage from "./views/FrontPage";
import SignUp from "./views/SignUp";

import getClientDimensions from "./utils/getClientDimensions";

function App() {
  const clientHeight = getClientDimensions().height;
  const clientWidth = getClientDimensions().width;
  return (
    <Router>
      <div
        style={{ height: clientHeight }}
        class="bg-light vw-100 position-relative"
      >
        <Logo />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Background clientWidth={clientWidth} />
            <FrontPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
