import React, { Component } from 'react';
import '../App.css';
import Card from './Card.js';
import images from '../images/images.js';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state={
      cards: []
    };
  }

  componentWillMount() {
    images.on('value', data =>{
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
