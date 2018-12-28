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
                            <span>Opis</span> <br /><span>Moon&Stars hostel se nalazi u centru Barselone, u Gotskoj četvrti na 2 minuta (100m) od glavnog šetališta – La Ramble i 2km od plaže Barseloneta. Sobe su 1/2, 1/6 1/8 i svaka ima svoje kupatilo (u višekrevetnim sobama krevetu su na sprat). U hostelu se rentiraju posteljina (2,2eur), peškiri (2,2eur) i ćebad (3,3eur), a u dvokrevetnim sobama su uključeni u cenu. Kako je hostel smešten u najužem centru grada, autobus se ne može parkirati blizu I potrebno je ići pešice oko 20ak minuta. Usluga je na bazi noćenja sa doručkom.</span>
                        </div>
                        <div className="view-info-stuff">
                            <div>
                                <div>Kreveti: 2</div>
                                <div>Tus kabina: Da</div>
                                <div>Wifi: Da</div>
                            </div>
                            <div>
                                <div>Klima: Da</div>
                                <div>Terasa: Da</div>
                                <div>Pet friendly: Ne</div>
                            </div>
                            <div>
                                <div>Kupatila: 1</div>
                                <div>Sobe: 1</div>
                                <div>Gosti: 2</div>
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