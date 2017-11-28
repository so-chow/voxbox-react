import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Snacks extends Component {
   render() {
    return (
      <div className="cards-container">
        <CardList category="snacks"/>
      </div>
    );
  }
}

export default Snacks;
