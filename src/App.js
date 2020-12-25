import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Page404 from './pages/Page404';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div className="App ">
        <Switch>          
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>          
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/terms' component={Terms}/>
          <Route path='/privacy-policy' component={PrivacyPolicy}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/category/:categoryName' component={Category}/>         
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
