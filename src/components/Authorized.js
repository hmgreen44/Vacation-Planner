import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import TripPage from '../pages/TripPage'
import { useAuth } from '../utilities/AuthContext'
import { TripProvider } from '../utilities/TripContext'

export default function Authorized() {
    const { token } = useAuth()
    return (
        <TripProvider token={token}>
            <Switch>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/create">
                    <CreateTripPage />
                </Route>
                <Route path="/trip">
                    <TripPage />
                </Route>
            </Switch>
        </TripProvider>
    )
}
