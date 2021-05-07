import React from 'react'
import { useTrip } from '../utilities/TripContext'
import { useParams } from 'react-router-dom'


export default function TripPage() {
    const { myTrips } = useTrip()
    const { tripToken } = useParams()
    console.log(tripToken)
    console.log(myTrips)
    const foundTrip = myTrips.find(trip => trip.trip_token == tripToken)
    console.log(foundTrip)
    let startDate = new Date(foundTrip.start_date).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric' })
    let endDate = new Date(foundTrip.end_date).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric' })
    return (

        <div className="about container">
            <div className="row mt-5">
                <div className="col">
                    <h1>Your Trip: {foundTrip.name}</h1>
                    <h1>Destination: {foundTrip.city}, {foundTrip.state}</h1>
                    <h1>From: {startDate}</h1>
                    <h1>To: {endDate}</h1>
                    <h1>Would you like to manage expenses?</h1>
                    <h1>Share this token to invite friends!</h1>
                    <input type="text" className="form-control" value={foundTrip.trip_token} id="myInput" />
                    <button className="btn btn-primary" onClick="myFunction()">Copy text</button>
                </div>
            </div>
        </div>
    )
}

