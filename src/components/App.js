import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Title from './Title';
import Footer from './Footer';
import Author from './Author';

import Home from '../pages/Home';
import Details from '../pages/Details';

const App = () => (
  <Router>
    <Title />
    <Switch>
      <Route path="/about" component={Author} />
      <Route path="/details/:id" component={Details} />
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
