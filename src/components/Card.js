import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state={
      isHidden: false
    }
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e){
    // this.setState({
    //   isHidden: !this.state.isHidden
    // })
    this.props.hasBeenClicked(this.props.title)
  }

  render() {
    let icon = this.state.isHidden ? "" : <img alt={this.props.title} src={this.props.src} onClick={this._handleClick}/>
    return (
      <button className="icons-button">
        {icon}
      </button>
    );
  }
}

export default Card;
