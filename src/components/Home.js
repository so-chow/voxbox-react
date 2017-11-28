import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';

class Home extends Component {
   render() {
    return (
      <div className="cards-container">
        <CardList category="home"/>
      </div>
    );
  }
}

export default Home;
