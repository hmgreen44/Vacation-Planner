import './App.css';
import LandingPage from './components/LandingPage'
import RegisterPage from './components/RegisterPage'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default function App() {

  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Route path="/registration/">
          <RegisterPage />
        </Route>
      </Router>
    </div>
  );
}
