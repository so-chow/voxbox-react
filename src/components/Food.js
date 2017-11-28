import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Food extends Component {
   render() {
    return (
      <div className="cards-container">
        <CardList category="food"/>
      </div>
    );
  }
}

export default Food;
