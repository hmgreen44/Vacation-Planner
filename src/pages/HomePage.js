import React from 'react'
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <div className="homePage container fluid text-center">
                <div className="row text-center pt-4">
                    <div className="col-md-12 text-center">
                        <div className="heroText text-center mb-4 mt-5">
                            <div className="trans card p-5">
                                <div className="heroText">
                                    <h1>HomePage</h1>
                                    <p>View Your Current Trips</p>
                                    <p>Oops! Looks like you don't have any trips planned.</p>
                                    <Link to="/create/">
                                        Create One Now!</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

