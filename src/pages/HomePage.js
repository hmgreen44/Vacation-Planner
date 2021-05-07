import React from 'react'
import { Link } from "react-router-dom"
import { useTrip } from '../utilities/TripContext'



export default function HomePage() {
    const { myTrips } = useTrip()
    console.log(myTrips)
    const mappedTrips = myTrips.map((trip, index) => {
        return (
            <div className="row mt-5" key={index}>
                <div className="col-md-6 offset-md-3">
                    <div className="card text-center mb-5">
                        <div className="card-body">
                            <h5 className="card-title">{trip.name}</h5>
                            <p className="card-text">{trip.city}, {trip.state}</p>
                            <Link to={`/trip/${trip.trip_token}`} className="btn btn-outline-primary">More Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    //Welcome Back User
    return (
        <div className="bgImg container">
            <div className="row mt-1">
                <div className="subText col text-center mt-5 mb-5">
                <h1>Welcome!</h1>
                    <h1>This is your Dashboard</h1>
                    <p>Here you can view trips you are organizing, as well as trips you're participating in.</p>
                    <Link className="btn btn-primary mt-2" to="/create">
                        Create New Trip</Link>
                    {mappedTrips}
                </div>
            </div>
        </div>


    )
}

