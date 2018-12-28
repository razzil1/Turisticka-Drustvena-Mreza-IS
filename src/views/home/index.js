import React, { Component } from 'react';

import './index.css';
import Card from '../../components/Card';
import travel1 from '../../image/travel1.jpeg';
import travel2 from '../../image/travel2.jpg';
import { data } from './fakeData'

class Home extends Component {
    state = {
      selectedType: 'all'
    }
    renderOffers = () => {
      let offers = [];
      data.map((item, i) => {
        if(this.state.selectedType === 'all') {
          offers.push(<Card key={i} id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} />)
        } else if(this.state.selectedType === 'aranzman' && item.type===this.state.selectedType) {
          offers.push(<Card key={i} id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} />)
        } else if(this.state.selectedType === 'smestaj' && item.type===this.state.selectedType) {
          offers.push(<Card key={i} id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} />)
        } 
      })
      return offers;
    }
    render () {
      let wrapper = {
        width: '90vw',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '50px'
      }
        return (
          <React.Fragment>
            <div className="home-top-image-wrapper"></div>
            <div className="home-floating-buttons-wrapper">
              <div onClick={() => this.setState({selectedType:'aranzman'})}>Aranzmani</div>
              <div onClick={() => this.setState({selectedType:'smestaj'})}>Smestaji</div>
              <div onClick={() => this.setState({selectedType:'all'})}>Utisci</div>
            </div>
            <div style={wrapper}>
              {this.renderOffers()}
            </div>
          </React.Fragment>
        )
    }
}

export default Home;