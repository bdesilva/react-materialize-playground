import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Login from './components/login';
import Main from './components/main';
import NotFound from './components/not-found';

const routes = (
  <div>
    <Route path="/public/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/public/main" component={Main} />    
    </Route>
    <Route path="*" component={NotFound} />
  </div>
);

export default routes;
