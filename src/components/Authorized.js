import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import Expense from '../components/Expense'
import TripPage from '../pages/TripPage'
import { useAuth } from '../utilities/AuthContext'
import { TripProvider } from '../utilities/TripContext'
import JoinTripPage from '../pages/JoinTripPage'

export default function Authorized() {
    const { token } = useAuth()
    return (

        <TripProvider token={token}>
            <Switch>
                <Route path="/home">
                    {token.length > 0 ? <HomePage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/create">
                    {token.length > 0 ? <CreateTripPage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/trip/:tripToken">
                    {token.length > 0 ? <TripPage /> : <Redirect to="/login" />}
                </Route>
                <Route path="/expense/:tripToken">
                    {token.length > 0 ? <Expense /> : <Redirect to="/login" />}
                </Route>
                <Route path="/join/">
                    {token.length > 0 ? <JoinTripPage /> : <Redirect to="/login" />}
                </Route>
            </Switch>
        </TripProvider>
    )
}
