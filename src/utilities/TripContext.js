import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
import history from "./history";
const TripContext = createContext({});

export const TripHelper = ({ token }) => {
    const [myTrips, setMyTrips] = useState([])
    //Get all of my trips
    //Create a new trip
    //Join a current trip
    //leave a current trip
    //add an expense
    function create(data, e) {
        console.log(token)
        e.preventDefault()
        axiosHelper({
            data,
            method: 'post',
            url: '/api/trip/create',
            token
            // successMethod:

        })

    }
    return { create, myTrips }

}

export const TripProvider = (props) => {

    const initialContext = TripHelper(props)
console.log(props)
    return (
        <TripContext.Provider value={initialContext}>
            {props.children}
        </TripContext.Provider>
    )
}

export const useTrip = () => useContext(TripContext);

export default TripContext;
