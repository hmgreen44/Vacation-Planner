import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../utilities/AuthContext'

export default function RegisterPage() {
    const { register } = useAuth()
    const [registrationData, setRegistrationData] = useState({})
    const handleChange = e => setRegistrationData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        e.preventDefault()
        register(registrationData)
    }

    return (
        <div className="registerPage container fluid">
            <div className="row position-relative justify-content-center text-center mt-5 pt-4">
                <div className="col-md-8 text-center mt-5">
                    <div className="trans card p-5">
                        <div className="heroText">
                            <h2>Create A New Account</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mt-3 mb-3">
                                    <input name="name" value={registrationData.name || ''} type="text" className="form-control" placeholder="Name" id="exampleInputName" onChange={handleChange} />
                                </div>
                                <div className="input-group mt-3 mb-3">
                                    <input name="email" type="text" value={registrationData.email || ''} className="form-control" placeholder="Email" id="exampleInputEmail" onChange={handleChange} />
                                </div>
                                <div className="input-group mt-3 mb-3">
                                    <input name="password" type="password" value={registrationData.password || ''} className="form-control" placeholder="Password" id="exampleInputPassword" onChange={handleChange} />
                                </div>
                                <div id="passwordHelp" className="form-text">Password must be between 8-20 characters.</div>
                                <div className="row text-center mt-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                                        <p>Already have an account?</p>
                                        <Link to="/">
                                            Login Here</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


