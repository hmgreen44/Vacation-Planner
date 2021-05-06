import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useTrip } from '../utilities/TripContext'

export default function CreateTripPage() {
    // const { } = useAuth()
    const [tripData, setTripData] = useState({})
    const { create } = useTrip()
    const handleChange = e => setTripData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    const handleSubmit = e => {
        e.preventDefault()
        create(tripData)
    }
    return (
        <div className="container">
            <div className="row mt-5 text-center">
                <h1>Start a New Trip</h1>
                <p>Please fill out the fields provided below</p>
                <div className="col-md-6 offset-md-3">
                    <div className="card p-2 mt-3">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name" className="form-label">Trip Name</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        id="name" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-7">
                                    <label htmlFor="City" className="form-label">City</label>
                                    <input
                                        name='city'
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        value={tripData.city || ''}
                                        id="city" />
                                </div>
                                <div className="col-5">
                                    <label htmlFor="State" className="form-label">State</label>
                                    <input
                                        name='state'
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        value={tripData.state || ''}
                                        id="state" />
                                </div>
                                <div className="col-6 mt-3">
                                    <label htmlFor="start-date" className="form-label">Start Date</label>
                                    <input
                                        type="date"
                                        name="start_date"
                                        min="2021-05-01" max="2022-12-31"
                                        onChange={handleChange}
                                        value={tripData.start_date || ''}
                                        className="form-control"
                                        id="start-date" />
                                </div>
                                <div className="col-6 mt-3">
                                    <label htmlFor="end-date" className="form-label">End Date</label>
                                    <input
                                        type="date"
                                        name="end_date"
                                        min="2021-05-01" max="2022-12-31"
                                        value={tripData.end_date || ''}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="end-date" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mt-4">
                                {/* <p>Manage Expenses</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                        <span className="input-group-text">$</span>
                                        <span className="input-group-text">0.00</span>
                                    </div>
                                    <div className="col"> */}
                                        <button type="submit" className="btn btn-outline-primary mt-3">Submit</button>
                                        <div className="col mt-3">
                                            <Link to="/home">
                                                Back To HomePage</Link>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}


