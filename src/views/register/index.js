import React, { Component } from 'react';
import loginImage from '../../image/login4.jpg';
import './index.css';
class Register extends Component {
    state = {
        selected: 'turista'
    }

    render () {
        return (
            <div className="login-wrapper">
                <div className="login-image-wrapper">
                    <div className="register-role-wrapper">
                        {/* <p>Vi ste:</p> */}
                        <button 
                            className={this.state.selected==='turista' ? 'btn-selected': null} 
                            type="button" onClick={() => this.setState({selected:'turista'})}
                            >Turista</button>
                        <button 
                            className={this.state.selected==='agencija' ? 'btn-selected': null} 
                            type="button" onClick={() => this.setState({selected:'agencija'})}
                            >Agencija</button>
                        <button 
                            className={this.state.selected==='vlasnik' ? 'btn-selected': null} 
                            type="button" onClick={() => this.setState({selected:'vlasnik'})}
                            >Vlasnik smestaja</button>
                    </div>  
                    <div className="login-form-wrapper">
                        {this.state.selected === 'turista' ?
                            <form>
                                <input id="username" type="email" placeholder="Korisnicko ime" /> <br />
                                <input id="sifra" type="password" placeholder="Sifra" />
                                <input id="nova-sifra" type="password" placeholder="Ponovite sifru" />
                                <button type="button" className="btn-submit" onClick={() => this.props.history.push('/home')}>Napravite nalog</button>
                                <p>Imate nalog? <span onClick={() => this.props.history.push('/')}>Prijavite se</span></p>
                            </form>
                        : this.state.selected === 'agencija' ?
                            <form>
                                <input id="username" type="text" placeholder="Naziv agencije" /> <br />
                                <input id="username" type="text" placeholder="Ime i prezime vlasnika" /> <br />
                                <input id="username" type="text" placeholder="PIB" /> <br />
                                <input id="username" type="text" placeholder="Adresa" /> <br />
                                <input id="sifra" type="password" placeholder="Sifra..." />
                                <input id="nova-sifra" type="password" placeholder="Ponovite sifru..." />
                                <button type="button" className="btn-submit"  onClick={() => this.props.history.push('/home')}>Napravite nalog</button>
                                <p>Imate nalog? <span onClick={() => this.props.history.push('/')}>Prijavite se</span></p>
                            </form>
                        :
                            <form>
                                <input id="username" type="email" placeholder="Adresa" /> <br />
                                <input id="username" type="email" placeholder="Ime i prezime vlasnika" /> <br />
                                <input id="sifra" type="password" placeholder="Sifra..." />
                                <input id="nova-sifra" type="password" placeholder="Ponovite sifru..." />
                                <input id="file" type="file" style={{display: 'none'}}/>
                                <p style={{textAlign: 'left', marginBottom: '-17px'}}>Uverenje da je smestaj refistrovan za izdavanje</p>
                                <button type="button" onClick={() => document.getElementById('file').click()}>Izaberite PDF</button>
                                <button type="button" className="btn-submit" onClick={() => this.props.history.push('/home')}>Napravite nalog</button>
                                <p>Imate nalog? <span onClick={() => this.props.history.push('/')}>Prijavite se</span></p>
                            </form>
                        }
                    </div>
                    <img src={loginImage} />
                </div>
                <div className="login-card-wrapper">

                </div>
            </div>
        )
    }
}

export default Register