import { Link } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'

export default function RegisterPage(props) {
    const [token, setToken] = useState('')
    const [registrationData, setRegistrationData] = useState({})
    const handleChange = e => setRegistrationData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const saveToken = (newToken) => {
        setToken(newToken)
        window.localStorage.setItem('token', newToken)
        console.log("Registration was successful", newToken)
    }
    const register = (e) => {
        let apiUrl = 'https://vacation_planner-hmgreen44956074.codeanyapp.com/api/register'
        axios.post(apiUrl, registrationData)
            .then(function (response) {
                // handle success
                saveToken(response.data.data.token)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            })
        e.preventDefault()
    }

    return (
        <div className="registerPage container fluid">
            <div className="row position-relative justify-content-center text-center mt-5 pt-4">
                <div className="col-md-6 position-absolute top-50 start-50 translate-middle text-center mt-5">
                    <div className="trans card p-5">
                        <div className="heroText">
                            <h2>Create A New Account</h2>
                            <form onSubmit={register}>
                                <div className="input-group mt-3 mb-3">
                                    <input name="name" value={registrationData.name || ''} type="text" className="form-control" placeholder="Name" id="exampleInputName" onChange={handleChange} />
                                </div>
                                <div className="input-group mt-3 mb-3">
                                    <input name="email" type="text" value={registrationData.email || ''} className="form-control" placeholder="Email" id="exampleInputEmail" onChange={handleChange} />
                                </div>
                                <div className="input-group mt-3 mb-3">
                                    <input name="password" type="password" value={registrationData.password || ''} className="form-control" placeholder="Password" id="exampleInputPassword"onChange={handleChange} />
                                </div>
                                <div id="passwordHelp" className="form-text">Password must be between 8-20 characters.</div>
                                <div className="row text-center mt-3">
                                    <div className="col">
                                    <Link to="/MainPage/">
                                    <button type="submit" className="btn btn-primary mb-3">Submit</button></Link>
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


