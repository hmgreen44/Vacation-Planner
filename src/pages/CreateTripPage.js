import React from 'react'

export default function CreateTripPage() {
    return (
        <div>
            <div className="createTrip container fluid">
                <div className="row position-relative justify-content-center mt-5 pt-4">
                    <div className="col-md-12">
                        <div className="heroText mb-4 mt-5">
                            <div className="trans card p-5">
                                <div className="heroText text-center">
                                    <h1>Create a New Trip</h1>
                                    <p>Please fill out the fields provided below</p>
                                </div>
                                <div className="col-md-6">
                                    <form>
                                        <label htmlFor="Destination" className="form-label">Destination</label>
                                        <input type="text"
                                        className="form-control" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


