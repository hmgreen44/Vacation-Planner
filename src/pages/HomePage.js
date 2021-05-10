import React from 'react'
import { Link } from "react-router-dom"
import { useTrip } from '../utilities/TripContext'
import { useAuth } from '../utilities/AuthContext'


export default function HomePage() {
    const { myOrganizerTrips, myAttendeeTrips } = useTrip()
    const { userData } = useAuth()
    console.log({myOrganizerTrips, myAttendeeTrips})
    // const myTrips = [...myOrganizerTrips, ...myAttendeeTrips]
    //sort my trips by criteria newest, upcoming, organizing, attending
    console.log(userData.id)
    const mappedTrips = myAttendeeTrips.map((trip, index) => {
        console.log(trip)
        return (
            <div className="row mt-5" key={index}>
                <div className="col-md-6 offset-md-3">
                    <div className="special text-center mb-5">
                        <div className="card-body">
                            <h5 className="card-title">{trip.name}</h5>
                            <p className="card-text">{trip.city}, {trip.state}</p>
                            <Link to={`/trip/${trip.trip_token}`} className="btn btn-primary">More Info</Link> {" "}
                        {trip.organizer === userData.id && <button type="button" class="btn btn-success">Edit</button>}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    //Welcome Back User
    return (
        <div className="overflow-auto container">
            <div className="row mt-1">
                <div className="overflow col text-center mt-5 mb-5">
                <h1>Welcome!</h1>
                    <h2>This is your Dashboard</h2>
                    <p>Here you can view trips you are organizing, as well as trips you're participating in.</p>
                    <Link className="btn btn-primary mx-5" to="/create">
                        Create New Trip</Link>
                        <Link className="btn btn-primary mt-1 mx-5" to="/join">
                        Join Existing Trip</Link>
                    {mappedTrips}
                </div>
            </div>
        </div>


    )
}

