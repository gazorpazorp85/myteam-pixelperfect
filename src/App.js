import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/global.scss';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;