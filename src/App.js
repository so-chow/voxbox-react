import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SentenceStrip from './components/SentenceStrip';
import Home from './components/Home';
import Greetings from './components/Greetings';
import Feelings from './components/Feelings';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';

// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SentenceStrip />
          <Router>
            <div>
              <nav className="tabs">
                <NavLink exact={true} className="link" activeClassName="is-active" to="/">Home</NavLink>
                <NavLink className="link" activeClassName="is-active" to="/Greetings">Greetings</NavLink>
                <NavLink className="link" activeClassName="is-active" to="/Feelings">Feelings</NavLink>
              </nav>
              <Route exact path="/" component={Home} />
              <Route exact path="/Greetings" component={Greetings} />
              <Route exact path="/Feelings" component={Feelings} />
            </div>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
