import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SentenceStrip from './components/SentenceStrip';
import Home from './components/Home';
import Greetings from './components/Greetings';
import Modifiers from './components/Modifiers';
import Feelings from './components/Feelings';
import Places from './components/Places';
import Toys from './components/Toys';
import Snacks from './components/Snacks';
import Footer from './components/Footer';
import Food from './components/Food';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';


class App extends Component {
    constructor(props){
    super(props);

    this._handleSelectedCard = this._handleSelectedCard.bind(this);
  }

  _handleSelectedCard(card){
    console.log(card)
  }

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
                <NavLink className="link" activeClassName="is-active" to="/Modifiers">Modifiers</NavLink>
                <NavLink className="link" activeClassName="is-active" to="/Places">Places</NavLink>
                <NavLink className="link" activeClassName="is-active" to="/Toys">Toys</NavLink>
                <NavLink className="link" activeClassName="is-active" to="/Snacks">Snacks</NavLink>
                <NavLink className="link" activeClassName="is-active" to="/Food">Food</NavLink>
              </nav>
              <Route exact path="/" render={props => <Home {...props} hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Greetings" component={Greetings} />
              <Route path="/Feelings" component={Feelings} />
              <Route path="/Modifiers" component={Modifiers} />
              <Route path="/Places" component={Places} />
              <Route path="/Toys" component={Toys} />
              <Route path="/Snacks" component={Snacks} />
              <Route path="/Food" component={Food} />
            </div>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
