import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
import history from "./history";
const AuthContext = createContext({});

export const AuthHelper = () => {

    const [token, setToken] = useState('')
    const [userData, setUserData] = useState({})

    useEffect(() => {
        let lsToken = window.localStorage.getItem('token')

        if (lsToken) {
            setToken(lsToken)
        }

    }, [])

    useEffect(() => {
        if (token.length > 0) {
            getUserData()
        }

    }, [token])


    function saveUserData(res) {
        setUserData(prev => res.data);

    }

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
        history.replace('/home')
    }

    function destroyToken() {
        setToken('')
        setUserData(prev => ({}))
        window.localStorage.removeItem('token')
        history.replace('/')

    }
    function login(loginData) {

        axiosHelper({
            data: {
                username: loginData.email,
                grant_type: "password",
                client_id: "2",
                client_secret: "GhnCklCaO53n8Ds0woQBDAflG7URWvwbeWDpQWnU",
                ...loginData
            },
            method: 'post',
            url: '/oauth/token',
            successMethod: saveToken
        })
    }

    function logout() {
        axiosHelper({
            url: '/api/logout',
            successMethod: destroyToken,
            token

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
    function getUserData(){
        axiosHelper({
            url: '/api/user',
            successMethod: saveUserData,
            token
        })
    }


    return { token, userData, register, login, logout }

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
