import React, { Component } from 'react';
import loginImage from '../../image/login4.jpg';
import './index.css';
class Register extends Component {
    render () {
        return (
            <div className="login-wrapper">
                <div className="login-image-wrapper">
                    <div className="login-form-wrapper">
                        <form>
                            {/* <label for="username">Korisnicko Ime:</label> <br /> */}
                            <input id="username" type="email" placeholder="Korisnicko ime..." /> <br />
                            {/* <label for="username">Sifra:</label> <br /> */}
                            <input id="username" type="password" placeholder="Sifra..." />
                            <button type="button" onClick={() => this.props.history.push('/home')}>Prijavi se</button>
                            <p>Imate nalog? <span onClick={() => this.props.history.push('/')}>Prijavite se</span></p>
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

export default Register