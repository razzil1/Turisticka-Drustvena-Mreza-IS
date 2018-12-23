import React, { Component } from 'react';
import Card from '../../components/Card';
import travel1 from '../../image/travel1.jpeg';
import travel2 from '../../image/travel2.jpg';

class Home extends Component {
    render () {
        return (
          <div style={{marginLeft: '10px'}}>
            <Card title="Grand Canyon" image={travel1} />
            <Card title="Test" image={travel2} />
          </div>
        )
    }
}

export default Home;