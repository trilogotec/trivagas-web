import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';

import Login from './containers/Login/Login';
import OpportunitiesWrapper from './components/OpportunitiesWrapper/OpportunitiesWrapper';

import { history } from './helpers/history';

const RouteConfig = (props) => {
  // const { logged } = props;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/" render={() => <OpportunitiesWrapper />} />
      </Switch>
    </Router>
  );
};

export default RouteConfig;
