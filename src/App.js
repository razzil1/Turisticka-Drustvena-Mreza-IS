import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login  from './views/login';
import Home  from './views/home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </Router>
);

export default App;