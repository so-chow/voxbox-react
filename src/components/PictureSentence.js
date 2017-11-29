import React, { Component } from 'react';
import '../App.css';
import Card from './Card';
import jsonCardData from '../images/images.json';
import images from '../images/images';


class PictureSentence extends Component {
  constructor(props){
    super(props);
      this.state={
        cards: this.props.newArray
      }
      console.log(this.props.newArray)
    }

   render() {

    return (
      <div className="picture-sentence-container">

      </div>
    );
  }
}

export default PictureSentence;


