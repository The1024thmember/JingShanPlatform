import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Community from './pages/Community.js';
import Feed from './pages/Feed.js';
import MarketPlace from './pages/MarketPlace.js';
import News from './pages/News.js';
import Joke from './pages/Joke.js';
import Gossip from './pages/Gossip.js';
import Profile from './pages/Profile.js';

import SearchBar from './components/SearchBar/SearchBar.js';
import EntryCards from './components/EntryCards/EntryCards.js';

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
            <Route exact path="/gossip" component={Gossip} />
            <Route path="/joke" component={Joke} />
            <Route path="/news" component={News} />
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

function Main(){
  return (
    <div className = 'mainPage'>
      <SearchBar />
      <EntryCards />
    </div>
  )
}
export default App;
