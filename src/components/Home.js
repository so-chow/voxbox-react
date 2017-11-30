import React, { Component } from 'react';
import '../App.css';
import CardList from './CardList';


class Home extends Component {

   render() {
    return (
      <div className="cards-container">
        <CardList category={this.props.category} _moveCardToSentenceList={this.props._moveCardToSentenceList} entireCardList={this.props.entireCardList}/>
      </div>
    );
  }
}

export default Home;
