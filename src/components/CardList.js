import React, { Component } from 'react';
import '../App.css';
import Card from './Card.js';
import jsonCardData from '../images/images.json';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state={
      cards: []
    };
  }

  componentWillMount() {
    jsonCardData.cards.forEach(card => {
      let cardArray = this.state.cards
    })
      const results = images(data.val());
      this.setState({
        cards: results
      });
    });
  }

  render() {

    let cardArray = this.state.cards.map(el=>(el=<Card text={el.card} key={el.id}/>));

    return (
      <div>
        {cardArray}
      </div>
    );
  }
}

export default CardList;
