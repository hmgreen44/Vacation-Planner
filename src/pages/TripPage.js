import React from 'react'
import { useTrip } from '../utilities/TripContext'
import { useParams, Link } from 'react-router-dom'
import { TripProvider } from '../utilities/TripContext'


export default function TripPage() {
    const { myOrganizerTrips, myAttendeeTrips, deleteExpense } = useTrip()
    const { tripToken } = useParams()
    const myTrips = [...myOrganizerTrips, ...JSON.parse(myAttendeeTrips)]
    //sort my trips by criteria newest, upcoming, organizing, attending
    const foundTrip = JSON.parse(myAttendeeTrips).find(trip => trip.trip_token == tripToken)
    let startDate = new Date(foundTrip.start_date).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric' })
    let endDate = new Date(foundTrip.end_date).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric' })

    const mappedExpenses = foundTrip.expenses.map((expense, index) => {
        return (
            <div className="row p-3 mt-4" key={index}>
                <div className="input-group mb-1">
                    <input

                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={expense.name}
                        name="name" disabled />
                    <span className="input-group-text">$</span>
                    <input

                        name="cost"
                        type="number"
                        className="form-control"
                        value={expense.cost}
                        placeholder="0.00" disabled />
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteExpense(expense.id)}
                        id="button-addon2">Delete</button>
                </div>
            </div>

        )
    })
    return (

        <div className="about container">
            <div className="row mt-5 text-center">
                <div className="col mt-3">
                    <div className="special p-2 mb-2">
                        <h1>{foundTrip.name}</h1>
                        <h2>Destination: {foundTrip.city}, {foundTrip.state}</h2>
                        <h5>From: {startDate}</h5>
                        <h5>To: {endDate}</h5>
                        <div className="row">
                            <div className="col mx-5">
                                <h2>Manage Expenses</h2>
                                {mappedExpenses}
                                <Link className="btn btn-primary mt-1" to={`/expense/${foundTrip.id}`}>
                                    Add Expense</Link>
                                <div className="row mt-3">
                                    <h5>Share this token to invite friends!</h5>
                                    <div className="col text-center mx-3">
                                        <input type="text"
                                            className="form-control"
                                            defaultValue={foundTrip.trip_token}
                                            id="myInput" />
                                    </div>
                                    <div className="row mt-4 ms-1">
                                        <div className="col">
                                            <Link className="btn btn-primary" to="/home">
                                                Back To HomePage</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

