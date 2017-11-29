import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SentenceStrip from './components/SentenceStrip';
import Home from './components/Home';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';


class App extends Component {
    constructor(props){
    super(props);
    this.state={
      word: ''
    }
    this._handleSelectedCard = this._handleSelectedCard.bind(this);
  }

  _handleSelectedCard(card){
    console.log(card, "app")
    this.setState({
      word: card
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SentenceStrip newWord={this.state.word} />
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
              <Route exact path="/" render={props => <Home {...props} category="home" hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Greetings" render={props => <Home {...props} category="greetings" hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Feelings" render={props => <Home {...props} category="feelings" hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Modifiers" render={props => <Home {...props} category="modifiers" hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Places" render={props => <Home {...props} category="places" hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Toys" render={props => <Home {...props} category="toys" hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Snacks" render={props => <Home {...props} category="snacks" hasBeenSelected={this._handleSelectedCard}/>} />
              <Route path="/Food" render={props => <Home {...props} category="food" hasBeenSelected={this._handleSelectedCard}/>} />
            </div>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
