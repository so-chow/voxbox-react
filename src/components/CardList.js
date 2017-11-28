import React, { Component } from 'react';
import '../App.css';
import Card from './Card';
import jsonCardData from '../images/images.json';
import images from '../images/images';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state={
      cards: jsonCardData
    };
  }

  // componentWillMount() {

  // }


  render() {

    let cardArray = this.state.cards.cards.map((card, index) =>
      this.props.category === card.category ? <Card title={card.title} src={images[card.title]} key={index} />
      : "");

    return (
      <div>
        {cardArray}
      </div>
    );
  }
}

export default CardList;
