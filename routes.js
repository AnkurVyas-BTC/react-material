import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/about';
import Todo from './containers/Todo';
import Navigation from './containers/Navigation';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Navigation} />
        <Route path='/about' component={About} />
        <Route path='/todos' component={Todo} />
      </Switch>
    </BrowserRouter>
  )
}