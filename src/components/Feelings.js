import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Feelings extends Component {
   render() {
    return (
      <div className="cards-container">
        <CardList category="feelings"/>
      </div>
    );
  }
}

export default Feelings;
