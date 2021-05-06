import React from 'react'
import { Link } from "react-router-dom"
import { useTrip } from '../utilities/TripContext'



export default function HomePage() {
    const { myTrips } = useTrip()
    console.log(myTrips)

    //Welcome Back User
    return (
        <div className="landingPage container">
            <div className="row mt-5">
                <div className="subText col text-center">
                    <p>Trips you are Organizing</p>
                
                    <p>Oops! Looks like you don't have any trips planned.</p>
                    <Link to="/create">
                        Create One Now!</Link>
                </div>
                <div className="row mt-5">
                    <div className="subText col text-center">
                    <p>Trips you are going on</p>

                    </div>
                </div>
            </div>
        </div>


    )
}

