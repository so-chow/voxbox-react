import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Greetings extends Component {
   render() {

    return (
      <div className="cards-container">
        <CardList category="greetings"/>
      </div>
    );
  }
}

export default Greetings;
