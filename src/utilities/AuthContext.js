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
        const APItoken = res.data.data.token;
        setToken(APItoken)
        window.localStorage.setItem('token', APItoken)

    }

    function register(data) {

        axiosHelper({
            data,
            method: 'post',
            url: '/api/register',
            successMethod: saveToken
        })

    }

    return { token, register }

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
