import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useTrip } from '../utilities/TripContext'

export default function CreateTripPage() {
    // const { } = useAuth()
    const [tripData, setTripData] = useState({})
    const { create } = useTrip()
    const handleChange = () => {

    }
    return (
        <>
                <h1>Start a New Trip</h1>
                <p>Please fill out the fields provided below</p>
           
            <form onSubmit={e => create(tripData, e)}>
                <div className="row p-1">
                    <div className="col">
                        <label htmlFor="City" className="form-label">Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="City" />
                    </div>
                </div>
                <div className="row mt-3 p-1">
                    <div className="col-8">
                        <label htmlFor="City" className="form-label">City</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="City" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="State" className="form-label">State</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="State" />
                    </div>
                    <div className="row p-3">
                        <div className="col d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary btn-lg mt-3">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row text-center mt-3">
                <div className="col">
                    <Link to="/home">
                        Back To HomePage</Link>
                </div>
            </div>
        </>

    )
}


