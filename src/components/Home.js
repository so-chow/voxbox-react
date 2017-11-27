import React, { Component } from 'react';
import '../App.css';
import hello from '../img/hello.png';
import I from '../img/I.png';
import want from '../img/want.png';
import help from '../img/help.png';
import more from '../img/more.png';
import you from '../img/you.png';
import turn from '../img/turn.png';
import see from '../img/see.png';
import alldone from '../img/alldone.png';

class Home extends Component {
   render() {
    return (
      <div className="cards-container">
        <img src={I} className="cards" alt="I" />
        <img src={want} className="cards" alt="want" />
        <img src={help} className="cards" alt="help" />
        <img src={more} className="cards" alt="more" />
        <img src={you} className="cards" alt="you" />
        <img src={turn} className="cards" alt="turn" />
        <img src={see} className="cards" alt="see" />
        <img src={alldone} className="cards" alt="alldone" />
        <img src={hello} className="cards" alt="hello" />
      </div>
    );
  }
}

export default Home;
