import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Home extends Component {
  constructor(props){
    super(props);

    this._handleSelectedCard = this._handleSelectedCard.bind(this);
  }

  _handleSelectedCard(card){
    this.props.hasBeenSelected(card);
  }

   render() {
    return (
      <div className="cards-container">
        <CardList category="home" hasBeenSelected={this._handleSelectedCard}/>
      </div>
    );
  }
}

export default Home;
