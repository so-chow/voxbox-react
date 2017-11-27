import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state={
      isFlipped: false
    }

    _flipCard(){
    this.setState({
      isFlipped: this.state.isFlipped ? false : true
    });
  }

  render() {
    if(this.props.bool){
      this.state.isFlipped = true;
    }
    let display = this.state.isFlipped ? this.props.text : '';

    return (
      <div className="card" onClick={this._flipCard}>
        <h4 className="card-title">{display}</h4>
        <h6>Cards Against Assembly</h6>
      </div>
    );
  }
}

export default Card;
