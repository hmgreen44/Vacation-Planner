import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../utilities/AuthContext'

export default function LandingPage(props) {
    const { login } = useAuth()
    const [loginData, setLoginData] = useState({})
    const handleChange = e => setLoginData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        e.preventDefault()
        login(loginData)
    }



    return (
        <div className="landingPage container fluid text-center">
            <div className="row position-relative justify-content-center text-center mt-5 pt-4">
                <div className="col-md-8 text-center">
                    <div className="heroText text-center mb-4 mt-5">
                        <div className="trans card p-5">
                            <div className="heroText">
                                <h1>Vacation Planner</h1>
                                <p>Allow me to help organize your trip!</p>
                                <p>Already a current user? Sign in below</p>
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
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            name="password"
                                            value={loginData.password || ''}
                                            onChange={handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                                    <div className="row text-center mt-3">
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
            </div>
        </div>
    )

}


