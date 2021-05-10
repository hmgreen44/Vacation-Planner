import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
import history from "./history";
const TripContext = createContext({});

export const TripHelper = ({ token }) => {
    const [myOrganizerTrips, setMyOrganizerTrips] = useState([])
    const [myAttendeeTrips, setMyAttendeeTrips] = useState([])
    //Get all of my trips
    //Create a new trip
    //Join a current trip
    //leave a current trip
    //add an expense
    function saveOrganizerTrips(res) {
        setMyOrganizerTrips(res.data)
        history.push("/home")
    }
    function saveAttendeeTrips(res) {
        setMyAttendeeTrips(res.data)
        history.push("/home")
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
            data:{trip_token},
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

    function getAttendeeTrips(res) {
        console.log(res)
        axiosHelper({
            url: '/api/trips/attendee',
            token,
            successMethod: saveAttendeeTrips

        })
    }

    useEffect(() => {
        if (token.length > 0) {
            getOrganizerTrips()
            getAttendeeTrips()
        }
    }, [token])
    return { myOrganizerTrips, myAttendeeTrips, create, join }

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
