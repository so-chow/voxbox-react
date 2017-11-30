import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e){
    this.props.hasBeenClicked(this.props.title)
  }

  render() {

    return (
      <button className="icons-button">
        <img alt={this.props.title} src={this.props.src} onClick={this._handleClick}/>
      </button>
    );
  }
}

export default Card;
