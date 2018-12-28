import React, { Component } from 'react';
import loginImage from '../../image/login4.jpg';
import './index.css';
class Login extends Component {
    render () {
        return (
            <div className="login-wrapper">
                <div className="login-image-wrapper">
                    <div className="login-form-wrapper">
                        <form>
                            <input id="username" type="email" placeholder="Korisnicko ime" /> <br />
                            <input id="username" type="password" placeholder="Sifra" />
                            <button type="button" onClick={() => this.props.history.push('/home')}>Prijavi se</button>
                            <p>Nemate nalog? <span onClick={() => this.props.history.push('/register')}>Napravi nalog</span></p>
                        </form>
                    </div>
                    <img src={loginImage} />
                </div>
                <div className="login-card-wrapper">

                </div>
            </div>
        )
    }
}

export default Login