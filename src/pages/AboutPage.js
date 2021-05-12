import React from 'react'
import { Link } from "react-router-dom"
import house from '../img/house.jpeg';
import city from '../img/city.jpeg';


export default function AboutPage() {
    return (
        <div className="about container">
            <div className="row mt-5">
                <div className="col">
                    <div className="card mb-3">
                        <img src={city} className="card-img-top" alt="airplane" />
                        <div className="card-body text-center">
                            <h4 className="card-title">Our Mission</h4>
                            <p className="card-text">The goal of this app is to assist in planning and communicating for a shared trip. We strive to ease the burden of an Organizer by simplifying access to all relevant information, reducing the stress of both the Organizer and Trip-Goer.</p>
                            <p className="card-text text-center"><small className="text">Ready to plan your next trip?</small></p>
                            <Link to="/create" className="btn btn-outline-primary mt-2">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

