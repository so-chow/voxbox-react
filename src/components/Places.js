import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Places extends Component {
   render() {

    return (
      <div className="cards-container">
        <CardList category="places"/>
      </div>
    );
  }
}

export default Places;
