import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
const AuthContext = createContext({});

export const AuthHelper = () => {

    const [token, setToken] = useState('')

    useEffect(() => {
        let lsToken = window.localStorage.getItem('token')

        if (lsToken) {
            setToken(lsToken)
        }

    }, [])

    function saveToken(res) {
        console.log(res) // Check response
        let APItoken; // Initalize variable
        if (res.config.url === "https://vacation_planner-hmgreen44956074.codeanyapp.com/api/register") {
            APItoken = res.data.data.token
        } else if (res.config.url === "https://vacation_planner-hmgreen44956074.codeanyapp.com/oauth/token") {
            APItoken = res.data.access_token
        }
        // const APItoken = res.data.data.token || res.data.access_token;
        setToken(APItoken);
        window.localStorage.setItem('token', APItoken)
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token')

    }
    function login(loginData) {

        axiosHelper({
            data: {
                
                grant_type: "password",
                client_id: "2",
                client_secret: "lMUeM1hF41PoHrZJ4JxpDsOG7im4Y62qM0XajwvR",
                ...loginData
            },
            method: 'post',
            url: '/oauth/token',
            successMethod: saveToken
        })
    }

    function register(data) {

        axiosHelper({
            data,
            method: 'post',
            url: '/api/register',
            successMethod: saveToken

        })

    }

    return { token, register, login }

}

export const AuthProvider = (props) => {

    const initialContext = AuthHelper()

    return (
        <AuthContext.Provider value={initialContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
