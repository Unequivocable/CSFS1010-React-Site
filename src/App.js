import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './main-components/Home';
import Error from './main-components/Error';
import Contact from './main-components/Contact';
import Portfolio from './main-components/Portfolio';
import Resume from './main-components/Resume';

import './styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route component={Error}/>
        </Switch>
      </div> 
    </BrowserRouter>
  )}
}

export default App;
