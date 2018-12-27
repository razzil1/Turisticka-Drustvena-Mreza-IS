import React, { Component } from 'react';
import ReactStars from 'react-stars'
import { withRouter } from 'react-router-dom';

import './style.css';
class Card extends Component {
    render () {
        return (
            <div className="card">
              <div className="cardMain"
              style={{backgroundImage: `url(${this.props.image})`, backgroundSize: 'cover'}}>
                <span className="cardTitle">{this.props.title}</span>
                <span className="cardPrice">{this.props.price}$</span>
              </div>
              <ReactStars className="cardStars" size={24} />
              <span className="cardDescription">{this.props.description}</span>
              <a onClick={() => this.props.history.push('/view')} className="cardButton">Posetite ➡</a>
            </div>
        )
    }
}

export default withRouter(Card);