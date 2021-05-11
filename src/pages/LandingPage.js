import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../utilities/AuthContext'


export default function LandingPage() {
    const { token } = useAuth()
    return (
        <div className="imgStatic container">
            <div className="row">
                <div className="heroText text-center mt-5">
                    <br>
                    </br>
                    <p>Going Somewhere?</p>

                </div>
                <div className="row">
                    <div className="subText col text-center mt-2">
                        <p>Let's build a trip together.</p>
                        {token.length == 0 &&
                            <>
                                <Link to="/login"><button className="btn btn-primary btn-lg mb-3">Get Started</button>
                                </Link>
                            </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
