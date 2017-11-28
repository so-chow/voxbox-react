import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Modifiers extends Component {
   render() {
    return (
      <div className="cards-container">
        <CardList category="modifiers"/>
      </div>
    );
  }
}

export default Modifiers;
