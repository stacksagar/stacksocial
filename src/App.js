import React from "react";
import Dashboard from "./components/dashboard";
import Signup from "./components/signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./components/signin";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
