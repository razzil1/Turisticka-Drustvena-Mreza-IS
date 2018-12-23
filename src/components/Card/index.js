import React, { Component } from 'react';
import travel1 from '../../image/travel1.jpeg';
import './style.css';

class Card extends Component {
    render () {
        return (
            <div className="card">
              <img className="cardImg" src={this.props.image}></img>
              <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default Card;