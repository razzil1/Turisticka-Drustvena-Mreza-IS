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
                        <div className='view-single-info view-title'>
                            <span> {this.state.item.title} / {this.state.item.type}</span>
                        </div>
                        <div className='view-single-info'>
                            <span>Kontakt telefon</span> <br /> <span>+381752342120</span>
                        </div>
                        <div className="view-info-wrapper">
                        <div className='view-single-info'>
                            <span>Opis</span> <br /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        </div>
                        <div className="view-info-stuff">
                            <div>
                                <div>Kreveti: 3</div>
                                <div>Tus kabina: Da</div>
                                <div>Wifi: Da</div>
                            </div>
                            <div>
                                <div>Klima: Ne</div>
                                <div>Terasa: Ne</div>
                                <div>Pet friendly: Da</div>
                            </div>
                            <div>
                                <div>Kupatila: 2</div>
                                <div>Sobe: 2</div>
                                <div>Gosti: 4</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <CommentSection />
                </div>
            : null
        )
    }
}

export default View;