import React, { Component } from 'react';
import '../App.css';
import jsonCardData from '../images/images.json';
import PictureSentence from './PictureSentence';

class SentenceStrip extends Component {
  constructor(props){
    super(props);
    this.state={
      sentence: '',
      images: []
    }
    this.updateText = this.updateText.bind(this);
    this._speak = this._speak.bind(this);
  }

  updateText(evt){
    this.setState({
      sentence: this.refs.textInput.value
    });
  }

  _speak(e){
    e.preventDefault();
    var utterance = new SpeechSynthesisUtterance(this.state.sentence);
    speechSynthesis.speak(utterance);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps.newWord)

    var newSentence = this.state.sentence + " " + newProps.newWord;
    console.log('I THINK THIS IS THE NEW INPUT VALUE:', this.refs.textInput.value);

    this.setState({
      sentence: newSentence,
      images: [...this.state.images, newProps.newWord]
    })
    console.log(this.state.images)

  }

  render() {
    // let imageArray = jsonCardData.cards.map((card, index) =>
    //   this.state.category === card.category ?
    //   <div></div>)
    return (
      <div>
        <PictureSentence />
        <div className="form">
          <form name="sentence-strip" id="sentence-strip">
            <input type="text" name="sentence" placeholder="Click on icons to build a sentence"
            ref="textInput"
            value={this.state.sentence}
            onChange={this.updateText}
            />
            <button className="play-btn" onClick={this._speak}>Play</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SentenceStrip;

