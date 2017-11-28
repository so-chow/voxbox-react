import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Toys extends Component {
   render() {
    return (
      <div className="cards-container">
        <CardList category="toys"/>
      </div>
    );
  }
}

export default Toys;
