import React, { Component } from 'react';
import '../App.css';
import jsonCardData from '../images/images.json';
import PictureSentence from './PictureSentence';
import Card from './Card';
import images from '../images/images';

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
    var newSentence = this.state.sentence + " " + newProps.newWord;
    var newArray = [...this.state.images, newProps.newWord]
    this.setState({
      sentence: newSentence,
      images: newArray
    })
    console.log(this.state.images)
  }

  render() {

    var pictureSentence = [];
    var picture = this.state.images;
    console.log(picture, picture.length);
    console.log(jsonCardData.cards[0].title);
    for(var i=0; i < picture.length; i++){
      for(var j=0; j < jsonCardData.cards.length; j++){
        if(picture[i] === jsonCardData.cards[j].title){
          pictureSentence.push(<Card title={jsonCardData.cards[j].title} src={images[jsonCardData.cards[j].title]} key={i} />)
        }
      }
    }

    return (
      <div>
        <div className="picture-array">{pictureSentence}</div>
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

