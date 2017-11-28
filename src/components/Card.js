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
    this.setState({
      isHidden: !this.state.isHidden
    })
    this.props.hasBeenClicked(this.props.title)
  }

  render() {
    let icon = this.state.isHidden ? "" : <img alt={this.props.title} src={this.props.src} />
    return (
      <button className="icons-button" onClick={this._handleClick}>
        {icon}
      </button>
    );
  }
}

export default Card;

// import React, { Component } from 'react';
// import '../App.css';

// class Card extends Component {
//   constructor(props) {
//     super(props);

//     this.state={
//       isFlipped: false
//       card:
//     }
//   }

//     _flipCard(){
//     this.setState({
//       isFlipped: this.state.isFlipped ? false : true
//     });
//   }

//   render() {
//     if(this.props.bool){
//       this.setState({isFlipped: true});
//     }
//     // let display = this.state.isFlipped ? this.props.text : '';

//     return (
//       <div className="card" onClick={this._flipCard}>

//       </div>
//     );
//   }
// }

// export default Card;
