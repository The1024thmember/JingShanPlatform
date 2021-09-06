import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Community from './pages/Community.js';
import Feed from './pages/Feed.js';
import MarketPlace from './pages/MarketPlace.js';
import Profile from './pages/Profile.js';
import Main from './pages/MainPage.js';

import './pages/MainStyle.css';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route path = "/community" component = {Community}/>
            <Route path="/marketPlace" component={MarketPlace} />
            <PrivateRoute path="/feed" component={Feed} />
            <Route path="/signup" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Main} />   
          </Switch>
        </Router>
    </div>
  );
}

function PrivateRoute ({ component: Component, ...rest }) {
  const [cookies] = useCookies(['token']);
  const isAuthenticated = () => {
    const token = cookies.token;
    if (token !== undefined) {
      return true;
    }
    return false;
  }
 
  return (
    // Show the component only when the user is logged is logged in
    // Otherwise, redirect the user to login page
    <Route {...rest} render={props => (
      isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' />
    )}/>
  );
}


export default App;
