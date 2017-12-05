import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SentenceStrip from './components/SentenceStrip';
import Home from './components/Home';
import Footer from './components/Footer';
import images from './images/images.js';
import jsonCardData from './images/images.json';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';


class App extends Component {
    constructor(props){
    super(props);
    var entireCardList = jsonCardData.cards;
    this.state={
      entireCardList: entireCardList,
      sentenceList: []
    }
    this._moveCardToSentenceList = this._moveCardToSentenceList.bind(this);
    this._moveCardToEntireCardList = this._moveCardToEntireCardList.bind(this);
}

  _moveCardToSentenceList(cardTitle){
    let movingCard;
    let updatedCardList = this.state.entireCardList.filter(item => {
      if(item.title !== cardTitle){
        return true;
      } else {
        movingCard = item;
        return false;
      }
    })
    let addCardToSentenceList = this.state.sentenceList.concat(movingCard);
    this.setState({
      entireCardList: updatedCardList,
      sentenceList: addCardToSentenceList
    })
  }

  _moveCardToEntireCardList(cardTitle){
    let movingCard;
    let removeCardFromSentenceList = this.state.sentenceList.filter(item => {
      if(item.title !== cardTitle){
        return true;
      } else {
        movingCard = item;
        return false;
      }
    })
    let addCardToCardList = this.state.entireCardList.concat(movingCard);
    this.setState({
      entireCardList: addCardToCardList,
      sentenceList: removeCardFromSentenceList,
    })
  }

  // let tabs = jasonCardData.map(())

  render() {
    return (
      <div className="App">
          <Header />
          <SentenceStrip sentenceList={this.state.sentenceList} _moveCardToEntireCardList={this._moveCardToEntireCardList} />
            <Router>
              <div className="Site-content">
                <nav className="tabs">
                  <NavLink exact={true} className="link" activeClassName="is-active" to="/"><img src={images['home-tab']} alt="Home"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Greetings"><img src={images['greetings-tab']} alt="Greetings"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Feelings"><img src={images['feelings-tab']} alt="Feelings"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Modifiers"><img src={images['time-tab']} alt="Time"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Places"><img src={images['places-tab']} alt="Places"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Toys"><img src={images['toys-tab']} alt="Toys"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Snacks"><img src={images['snacks-tab']} alt="Snacks"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Food"><img src={images['food-tab']} alt="Food"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Drinks"><img src={images['drinks-tab']} alt="Drinks"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Face"><img src={images['face-tab']} alt="Face"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Bodyparts"><img src={images['bodyparts-tab']} alt="Bodyparts"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Colors"><img src={images['colors-tab']} alt="Colors"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Crafts"><img src={images['crafts-tab']} alt="Crafts"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Shapes"><img src={images['shapes-tab']} alt="Shapes"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Clothes"><img src={images['clothes-tab']} alt="Clothes"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Weather"><img src={images['weather-tab']} alt="Weather"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Animals"><img src={images['animals-tab']} alt="Animals"/></NavLink>
                  <NavLink className="link" activeClassName="is-active" to="/Transportation"><img src={images['transportation-tab']} alt="Transportation"/></NavLink>
                </nav>
                <Route exact path="/" render={props => <Home {...props} category="home" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Greetings" render={props => <Home {...props} category="greetings" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Feelings" render={props => <Home {...props} category="feelings" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Modifiers" render={props => <Home {...props} category="modifiers" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Places" render={props => <Home {...props} category="places" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Toys" render={props => <Home {...props} category="toys" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Snacks" render={props => <Home {...props} category="snacks" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Food" render={props => <Home {...props} category="food" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Drinks" render={props => <Home {...props} category="drinks" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Face" render={props => <Home {...props} category="face" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Bodyparts" render={props => <Home {...props} category="bodyparts" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Colors" render={props => <Home {...props} category="colors" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Crafts" render={props => <Home {...props} category="crafts" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Shapes" render={props => <Home {...props} category="shapes" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Clothes" render={props => <Home {...props} category="clothes" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Weather" render={props => <Home {...props} category="weather" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Animals" render={props => <Home {...props} category="animals" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                <Route path="/Transportation" render={props => <Home {...props} category="transportation" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
                </div>
            </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
