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
        <>
            <div className='text-center'>
                <h1>Start a New Trip</h1>
                <p>Please fill out the fields provided below</p>
            </div>
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
                        <div className="col-5 mt-3 text-center">
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
                        <div className="col-2 mt-3 text-center">
                            <p> to </p>
                        </div>

                        <div className="col-5 mt-3 text-center">
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
                    <div className="col mt-3 text-center">
                        <button type="submit" className="btn btn-outline-primary mt-3">Submit</button>
                    </div>
            </form>
            <div className="row mt-5 text-center">
                <div className="col">
                    <Link to="/home">
                        Back To HomePage</Link>
                </div>
            </div>
        </>

    )
}


