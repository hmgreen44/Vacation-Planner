import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../utilities/AuthContext'
import useForm from '../utilities/useForm'
import validate from '../utilities/FormValidationRules'

export default function RegisterPage() {
    const { register } = useAuth()
    const [registrationData, setRegistrationData] = useState({})
    const handleChange = e => setRegistrationData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        e.preventDefault()
        register(registrationData)
    }

    const Form = e => {
        register(formInfo)
    }
    const {
        formInfo,
        errors,
    } = useForm(Form, validate);


    return (
        <>
            <h2>Create A New Account</h2>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="input-group mt-3 mb-3">
                    <input
                        className={`form-control ${errors.name}`}
                        name="name"
                        value={registrationData.name || ''}
                        type="text"
                        placeholder="Name"
                        id="exampleInputName"
                        onChange={handleChange} required />
                    <div className="valid-feedback">
                        Looks good!
                                        </div>
                </div>
                <div className="input-group mt-3 mb-3">
                    <input
                        className={`form-control ${errors.email && 'is-danger'}`}
                        name="email"
                        type="text"
                        value={registrationData.email || ''}
                        placeholder="Email"
                        id="exampleInputEmail"
                        onChange={handleChange} required />
                </div>
                <div className="input-group mt-3 mb-3">
                    <input
                        className={`form-control ${errors.password}`}
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={registrationData.password || ''}
                        id="exampleInputPassword"
                        onChange={handleChange} required />
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
        </>
    )

}


