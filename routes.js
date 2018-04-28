import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/about';
import Todo from './containers/Todo';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Todo} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  )
}