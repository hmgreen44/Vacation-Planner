import React from 'react'
import { useTrip } from '../utilities/TripContext'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { TripProvider } from '../utilities/TripContext'


export default function TripPage() {
    const { myOrganizerTrips, myAttendeeTrips } = useTrip()
    const { tripToken } = useParams()
    const myTrips = [...myOrganizerTrips, ...myAttendeeTrips]
    //sort my trips by criteria newest, upcoming, organizing, attending
    const foundTrip = myTrips.find(trip => trip.trip_token == tripToken)
    console.log(foundTrip)
    let startDate = new Date(foundTrip.start_date).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric' })
    let endDate = new Date(foundTrip.end_date).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric' })

    
    return (

        <div className="about container">
            <div className="row mt-5 text-center">
                <div className="col mt-3">
                    <div className="special p-2 mb-2">
                        <h1>{foundTrip.name}</h1>
                        <h2>Destination: {foundTrip.city}, {foundTrip.state}</h2>
                        <h5>From: {startDate}</h5>
                        <h5>To: {endDate}</h5>
                        <div className="row">
                            <div className="col">
                                <h2>Manage Expenses</h2>
                                <p>Current total cost:</p>
                                <Link className="btn btn-primary mt-1" to="/expense">
                                    Add Expense</Link>
                                <div className="row mt-3">
                                    <h5>Share this token to invite friends!</h5>
                                    <div className="col text-center mx-5">
                                        <input type="text"
                                        className="form-control" 
                                        defaultValue={foundTrip.trip_token} 
                                        id="myInput" />
                                    </div>
                                    <div className="row mt-4 ms-1">
                                        <div className="col">
                                            <Link className="btn btn-outline-primary" to="/home">
                                                Back To HomePage</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

