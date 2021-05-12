import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import { axiosHelper } from './axiosHelper'
import history from "./history";

const TripContext = createContext({});


export function useForceUpdate() {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
        setTick(tick => tick + 1);
    }, [])
    return update;
}


export const TripHelper = ({ token }) => {
    const [myOrganizerTrips, setMyOrganizerTrips] = useState([])
    // const [myAttendeeTrips, setMyAttendeeTrips] = useState([])
    const [myAttendeeTrips, setMyAttendeeTrips] = useState("[]")
    const forceUpdate = useForceUpdate();

    //Get all of my trips
    //Create a new trip
    //Join a current trip
    //leave a current trip
    //add an expense
    function saveOrganizerTrips(res) {
        setMyOrganizerTrips(prevTrips => res.data)
        history.push("/home")
        console.log(res.data)
        getAttendeeTrips()
    }
    function updateAttendeeTrips(res) {
        setMyAttendeeTrips(prevTrips => {
            return JSON.stringify(res.data)
        })
    }
    function saveAttendeeTrips(res) {
        updateAttendeeTrips(res)
        history.push("/home")
    }
    function updateTripExpenses(res) {
        updateAttendeeTrips(res)
    }
    function saveExpense(res) {
        updateAttendeeTrips(res)
        history.goBack()
    }
    function create(data) {
        axiosHelper({
            data,
            method: 'post',
            url: '/api/trip/create',
            token,
            successMethod: saveOrganizerTrips

        })

    }
    function join(trip_token) {
        axiosHelper({
            data: { trip_token },
            method: 'post',
            url: '/api/trip/adduser',
            token,
            successMethod: getAttendeeTrips
        })

    }
    function getOrganizerTrips() {
        axiosHelper({
            url: '/api/trips/organizer',
            token,
            successMethod: saveOrganizerTrips

        })
    }
    function getAttendeeTrips() {
        axiosHelper({
            url: '/api/trips/attendee',
            token,
            successMethod: saveAttendeeTrips

        })
    }
    function deleteExpense(expense_id) {
        axiosHelper({
            url: '/api/expense/destroy/' + expense_id,
            token,
            successMethod: updateTripExpenses
        })
    }
    function addExpenses(data) {
        console.log(data)
        axiosHelper({
            data,
            method: 'post',
            url: '/api/expenses/addexpenses',
            token,
            successMethod: saveExpense
        })
    }

    useEffect(() => {
        if (token.length > 0) {
            getOrganizerTrips()
            getAttendeeTrips()
        }
    }, [token])

    return { myOrganizerTrips, myAttendeeTrips, create, join, addExpenses, deleteExpense }

}

export const TripProvider = (props) => {

    const initialContext = TripHelper(props)
    return (
        <TripContext.Provider value={initialContext}>
            {props.children}
        </TripContext.Provider>
    )
}

export const useTrip = () => useContext(TripContext);

export default TripContext;
