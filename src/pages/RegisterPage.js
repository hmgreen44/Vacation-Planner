import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../utilities/AuthContext'
import useForm from '../utilities/useForm'
import validate from '../utilities/FormValidationRules'

export default function RegisterPage() {
    const { register } = useAuth()
    // const [registrationData, setRegistrationData] = useState({})
    // const handleSubmit = e => {
    //     e.preventDefault()
    //     register(registrationData)


    const {
        formInfo,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(API_URL, validate, 'register');

    function API_URL() {
        console.log('No errors, submit callback called!');
        register(formInfo)
    }

    return (
        <div className="imgStatic container fontColor">
            <div className="row text-center mt-5">
                <div className="col-md-6 offset-md-3 mt-5">
                    <h1>Create A New Account</h1>
                    <div className="special p-2 mt-3">
                        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                            <div className="input-group mt-3 mb-3">
                                <input
                                    className={`form-control ${formInfo.name && 'is-valid'} ${!!errors.name && 'is-invalid'}`}
                                    name="name"
                                    value={formInfo.name || ''}
                                    type="text"
                                    placeholder="Name"
                                    id="exampleInputName"
                                    onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <input
                                    className={`form-control ${formInfo.email && 'is-valid'} ${!!errors.email && 'is-invalid'}`}
                                    name="email"
                                    type="text"
                                    value={formInfo.email || ''}
                                    placeholder="Email"
                                    id="exampleInputEmail"
                                    onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            </div>
                            <div className="input-group mt-3 mb-3">
                                <input
                                    className={`form-control ${formInfo.password && 'is-valid'} ${!!errors.password && 'is-invalid'}`}
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    value={formInfo.password || ''}
                                    id="exampleInputPassword"
                                    onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    {errors.password}
                                </div>

                            </div>
                            <div id="passwordHelp" className="text">Password must be between 8-20 characters.</div>
                            <div className="row text-center mt-3">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                                    <p>Already have an account?</p>
                                    <Link className="btn btn-primary mb-2" to="/login">
                                        Login Here</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}


