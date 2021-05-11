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

    function startDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        return `${yyyy}-${mm}-${dd}`
    }
    function endDate() {
        const today = startDate()
        const sd = tripData.start_date || ''
        if (sd.length > 0) {
            return sd
        }
        return today;
    }
    function startDateMax() {
        const ed = tripData.end_date || ''
        const future = '2122-12-31'
        if (ed.length > 0) {
            return ed
        }
        return future;
    }

    return (
        <div className="bgImg container">
            <div className="row mt-5 text-center">
                <h1>Start a New Trip</h1>
                <p>Please fill out the fields provided below</p>
                <div className="col-md-6 offset-md-3">
                    <div className="special p-2 mt-3 mb-2">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name" className="form-label">Trip Name</label>
                                    <input
                                        name='name'
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
                                        min={startDate()} max={startDateMax()}
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
                                        min={endDate()} max="2122-12-31"
                                        value={tripData.end_date || ''}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="end-date" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mt-4">
                                   
                                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                    <div className="col mt-5 mb-2">
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


