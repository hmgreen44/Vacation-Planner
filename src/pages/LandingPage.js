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
        <>
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
                        className="form-control"
                        type="password"
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
        </>
    )

}


