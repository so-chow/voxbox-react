import React, { Component } from 'react';
import '../App.css';

class SentenceStrip extends Component {
  constructor(props){
    super(props);
    this.state={
      sentence: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  updateText(evt){
    this.setState({
      sentence: evt.target.value
    });
  }

  // handleSubmit(evt){
  //   evt.preventDefault();

  // }

  render() {
    return (
      <div className="form">
        <form name="sentence-strip" id="sentence-strip" onSubmit={this.handleSubmit}>
          <input type="text" name="sentence" placeholder="Click on icons to build a sentence" onChange={this.updateText}/>
          <button className="play-btn">Play</button>
        </form>
      </div>
    );
  }
}

export default SentenceStrip;

