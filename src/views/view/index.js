import React, { Component } from 'react';
import { data } from '../home/fakeData';
import ReactStars from 'react-stars'
import './index.css';
import CommentSection from '../../components/CommentSection';

class View extends Component {
    state = {
        item: null,
    }
    componentDidMount () {
        let item = null;
        data.map(itemm => {
            if(itemm.id === Number(this.props.match.params.id)) {
                item = itemm;
            }
        })
        this.setState({item})
    }

    render () {
        return (
            this.state.item ?
                <div className="view-wrapper" style={{backgroundImage: `url('${this.state.item.image}')`}}>
                    <div>
                        <div className="stars">
                            <ReactStars edit={false} size={40} value={3+Math.random()*2}></ReactStars>
                        </div>
                    </div>
                    <CommentSection />
                </div>
            : null
        )
    }
}

export default View;