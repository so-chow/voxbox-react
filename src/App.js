import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SentenceStrip from './components/SentenceStrip';
import Home from './components/Home';
import Footer from './components/Footer';
import jsonCardData from './images/images.json';
import images from './images/images';
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
    console.log(this.state.entireCardList, "_moveCardToSentenceList");
    console.log(this.state.sentenceList, "_moveCardToSentenceList");
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
    console.log(this.state.entireCardList, "_moveCardToEntireCardList");
    console.log(this.state.sentenceList, "_moveCardToEntireCardList");
  }

  render() {
    console.log(this.state.entireCardList)
    return (
      <div className="App">
        <Header />
        <SentenceStrip sentenceList={this.state.sentenceList} _moveCardToEntireCardList={this._moveCardToEntireCardList} />
          <Router>
            <div className="Site-content">
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
              <Route exact path="/" render={props => <Home {...props} category="home" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
              <Route path="/Greetings" render={props => <Home {...props} category="greetings" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
              <Route path="/Feelings" render={props => <Home {...props} category="feelings" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
              <Route path="/Modifiers" render={props => <Home {...props} category="modifiers" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
              <Route path="/Places" render={props => <Home {...props} category="places" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
              <Route path="/Toys" render={props => <Home {...props} category="toys" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
              <Route path="/Snacks" render={props => <Home {...props} category="snacks" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
              <Route path="/Food" render={props => <Home {...props} category="food" _moveCardToSentenceList={this._moveCardToSentenceList} entireCardList={this.state.entireCardList}/>} />
            </div>
          </Router>
        <Footer className="clearfix"/>
      </div>
    );
  }
}

export default App;
