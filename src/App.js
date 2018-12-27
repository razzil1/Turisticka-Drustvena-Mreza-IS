import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login  from './views/login';
import Home  from './views/home';
import Register from './views/register';
import View from './views/view';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route path="/view" component={View} />
    </Switch>
  </Router>
);

export default App;