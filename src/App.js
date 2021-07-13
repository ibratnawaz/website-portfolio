import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';

import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/work' component={MyWork} />
        <Route exact path='/contact' component={ContactMe} />
      </Switch>
    </Router>
  );
}

export default App;
