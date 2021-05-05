import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../utilities/AuthContext'



export default function HomePage() {
    const { logout } = useAuth()

    //Welcome Back User
    return (
        <div className="text-center">    
                    <p>View Your Current Trips</p>
                    <p>Oops! Looks like you don't have any trips planned.</p>
                    <Link to="/create">
                        Create One Now!</Link>          
        </div>


    )
}

