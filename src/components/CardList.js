import React, { Component } from 'react';
import '../App.css';
import Card from './Card';
import images from '../images/images';

class CardList extends Component {

  render() {
    let categoryCards = this.props.entireCardList.filter(card => this.props.category === card.category) //finding cards from their category render only matched category cards
    let cardArray = categoryCards.map((card, index) => (
      <Card title={card.title} src={images[card.title]} key={index} hasBeenClicked={this.props._moveCardToSentenceList} />
      ));

    return (
      <div className="card-array">
        {cardArray}
      </div>
    );
  }
}

export default CardList;
