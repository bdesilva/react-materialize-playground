import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Login from './components/login';
import Main from './components/main';

const routes = (
  <Route path="/public/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/public/main" component={Main} />
  </Route>
);
export default routes;
