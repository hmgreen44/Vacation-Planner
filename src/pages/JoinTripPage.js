import React, { useState } from 'react'
import { useTrip } from '../utilities/TripContext'

export default function JoinTripPage() {
    const [joinData, setJoinData] = useState('')
    const { join } = useTrip()
    const handleChange = e => setJoinData (e.target.value);
    const handleSubmit = e => {
        e.preventDefault()
        join(joinData)
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center mt-5">
                    <h4>Please enter the token provided by your Organizer</h4>
                    <div className="input-group mb-3 mt-3">
                        <form onSubmit={handleSubmit}>
                            <input type="text"
                                className="form-control"
                                placeholder="Token"
                                aria-label="Token"
                                id="token"
                                value={joinData}
                                name="trip_token"
                                onChange={handleChange} />
                            <button type="submit" className="btn btn-primary mb-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
