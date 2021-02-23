import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./components/Background";
import Logo from "./components/Logo";
import FrontPage from "./views/FrontPage";
import SignUp from "./views/SignUp";

function App() {
  const innerHeight = window.innerHeight;
  return (
    <Router>
      <div
        style={{ height: innerHeight }}
        class="bg-light vw-100 position-relative"
      >
        <Logo />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Background />
            <FrontPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
