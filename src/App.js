import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './main-components/Home';
import Error from './main-components/Error';
import Contact from './main-components/Contact';
import Portfolio from './main-components/Portfolio';
import Resume from './main-components/Resume';
import Users from './main-components/Users';
import Entries from './main-components/Entries';
import UserContext from './main-components/sub-components/User'
import './styles.css';


const App = () => {
  const [ login, setLogin ] = useState("loggedOut")
  const [ token, setToken ] = useState("")


    return (
      <UserContext.Provider value={{ 
        login, setLogin, 
        token, setToken, 
        }}>
      <BrowserRouter>
      <body>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/entries" component={Entries}/>
          <Route path="/users" component={Users}/>
          <Route component={Error}/>
        </Switch>
      </body> 
    </BrowserRouter>
    </UserContext.Provider>
)}


export default App;
