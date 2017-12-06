import React, { Component } from 'react';
import '../App.css';
import Card from './Card';
import images from '../images/images';


class SentenceStrip extends Component {
  constructor(props){
    super(props);
    this.state={
      sentence: '',
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
    var utterance = new SpeechSynthesisUtterance(this.refs.textInput.value);
    utterance.onstart = function (event) {
        console.log('The utterance started.')
    };
    window.speechSynthesis.onvoiceschanged = function () {

        var voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.filter(function (voice) { return voice.lang === 'pt-BR'; })[0];

    };
    window.speechSynthesis.speak(utterance);
  }

  render() {

   var pictureSentence = this.props.sentenceList.map((card, index) => (
    <Card title={card.title} src={images[card.title]}
            key={index} hasBeenClicked={this.props._moveCardToEntireCardList} />
    ));
   var newSentence = this.props.sentenceList.map(card => card.title).join(" ");

    return (
      <div>
        <div className="picture-array">{pictureSentence}</div>
        <div className="form">
          <form name="sentence-strip" id="sentence-strip">
            <input type="text" name="sentence" placeholder="Click on icons to build a sentence"
            ref="textInput"
            value={newSentence}
            onChange={this.updateText}
            />
            <button className="play-btn" onClick={this._speak}><img className="play-button-image"src={images.playbutton} alt="Play"/></button>
          </form>
        </div>
      </div>
    );
  }
}

export default SentenceStrip;
