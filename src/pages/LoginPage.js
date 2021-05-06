import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../utilities/AuthContext'
import Logo from '../img/Logo.png';

export default function LandingPage(props) {
    const { login } = useAuth()
    const [loginData, setLoginData] = useState({})
    const handleChange = e => setLoginData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        e.preventDefault()
        login(loginData)
    }



    return (
        <div className="landingPage container">
            <div className="row text-center">
                <div className="col-md-6 offset-md-3">
                <img src={Logo} width="150" className="loginLogo" alt="logo"/>
                    <p>Already a current user? Sign in below</p>
                    <div className="card p-2">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mt-3 mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Email"
                                    aria-label="Email"
                                    value={loginData.username || ''}
                                    onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={loginData.password || ''}
                                    onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-outline-primary mb-3">Login</button>
                            <div className="row mt-2">
                                <div className="col">
                                    <p>Don't have an account?</p>
                                    <Link to="/registration/">
                                        Register Here</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}


