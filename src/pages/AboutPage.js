import React from 'react'
import { Link } from "react-router-dom"
import house from '../img/house.jpeg';
import city from '../img/city.jpeg';


export default function AboutPage() {
    return (
        <div className="about container">
            <div className="row mt-5">
                <div className="col">
                    <div class="card mb-3">
                        <img src={city} class="card-img-top" alt="airplane" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Our Mission</h5>
                            <p class="card-text">The goal of this app is to simplify planning and communication for a mutual trip. We strive to ease the burden of an Organizer when planning for an upcoming vacation, event, or trip.</p>
                            <p class="card-text text-center"><small class="text">Ready to plan your next trip?</small></p>
                            <Link to="/registration"><button className="btn btn-outline-primary mt-2">Sign Up Now!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

                    