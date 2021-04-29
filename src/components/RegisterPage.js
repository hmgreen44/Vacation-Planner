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
        <div className="row text-center mb-4 mt-5">
            <div className="accountHeader col-md-12 col-sm-12">
                <h2>Create A New Account</h2>
                <form onSubmit={register}>
                    <div class="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input name="name" value={registrationData.name || ''} type="text" className="form-control" id="exampleInputName" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                        <input name="email" value={registrationData.email || ''} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" onChange={handleChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input name="password" value={registrationData.password || ''} type="password" className="form-control" id="exampleInputPassword" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}


