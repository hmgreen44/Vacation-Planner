import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../utilities/AuthContext'
function Nav() {
    const { logout, token } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
                <NavLink activeClassName="active" className="navbar-brand" to="/">Vacation Planner</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        {token.length > 0 &&
                            <>
                                <li className="nav-item mx-2">
                                    <NavLink activeClassName="active" className="nav-link" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <button onClick={logout} className="btn btn-outline-primary nav-link">Logout</button>
                                </li>
                            </>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
