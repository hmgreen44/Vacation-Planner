import React from 'react'
import { useTrip } from '../utilities/TripContext'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"


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
                <div className="col">
                    <div className="special p-2 mt-3 mb-2">
                        <h5>Your Trip: {foundTrip.name}</h5>
                        <h5>Destination: {foundTrip.city}, {foundTrip.state}</h5>
                        <h5>From: {startDate}</h5>
                        <h5>To: {endDate}</h5>
                        <h5>Would you like to manage expenses?</h5>
                        <Link className="btn btn-primary mt-2" to="/expense">
                            Add Expense</Link>
                        <h5>Share this token to invite friends!</h5>
                        <input type="text" className="form-control" value={foundTrip.trip_token} id="myInput" />
                        <button className="btn btn-primary" onClick="myFunction()">Copy text</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

