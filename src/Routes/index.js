import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Calculator } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/calculator" component={ Calculator } />
    <Route path="/" component={ Home } />
  </Switch>
);

export default Routes;
