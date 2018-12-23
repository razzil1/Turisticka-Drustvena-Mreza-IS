import React, { Component } from 'react';
import Card from '../../components/Card';
import travel1 from '../../image/travel1.jpeg';
import travel2 from '../../image/travel2.jpg';

class Home extends Component {
    render () {
        return (
          <div>
            <Card title="Grand Canyon" image={travel1} price="899" description="Otkrite neistrazene delove Amerike..." />
            <Card title="Tanzania" image={travel2} price="899" description="Zavirite u najlepse predele Tanzanije..." />
            <Card title="Grand Canyon" image={travel1} price="899" description="Otkrite neistrazene delove Amerike..." />
            <Card title="Tanzania" image={travel2} price="899" description="Zavirite u najlepse predele Tanzanije..." />
          </div>
        )
    }
}

export default Home;